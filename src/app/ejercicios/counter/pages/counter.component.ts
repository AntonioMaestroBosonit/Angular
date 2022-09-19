import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, scan, switchMap, tap, Subject, map, merge, takeUntil } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [`
    h1 {
      font-size: 70px;
      width: 210px;
      text-align: center;
    }
    .controllersWidth {
      width: 210px;
      text-align: center;
    }
  `]
})
export class CounterComponent implements OnInit {

  
  form: FormGroup = this.fb.group(
    {
      stepTo: [0],
      step: [1]
    }
  )

  counter: number = 0;
  direction: boolean = true;
  start: boolean = false;

    
  //Inicio los observables
  pauseDetector$:Subject<any> = new Subject;
  start$:Observable<any> = new Observable;
  pause$:Observable<any> = new Observable;
  reset$:Observable<any> = new Observable;
  countUp$:Observable<any> = new Observable;
  countDown$:Observable<any> = new Observable;

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    //Doy valor a los observables. Este hace el evento de click al start
    this.start$ = fromEvent<MouseEvent>(document.getElementById('start') as HTMLButtonElement, 'click')
      .pipe(
        //He probado varios, aquí ejecuto la cuenta comprobando la dirección
        tap(()=> this.start = true),
        switchMap(() => this.direction ? this.countUp() : this.countDown())
        // switchMap(() => this.countUp()),
      );

    //Evento de click al pause
    this.pause$ = fromEvent<MouseEvent>(document.getElementById('pause') as HTMLButtonElement, 'click')
      .pipe(
        //doy valor '' al pauseDetector, el map recibe evento y sale el contador
        tap(() => { 
          this.start = false; 
          this.pauseDetector$.next('');
        }),
        map( ev => this.counter )
      );

    //Evento de click al reset
    this.reset$ = fromEvent<MouseEvent>(document.getElementById('reset') as HTMLButtonElement, 'click')
      .pipe(
        //resetea al valor del input stepTo 
        map( ev => this.form.value['stepTo'] ),
      );

    //Evento de click al count up
    this.countUp$ = fromEvent<MouseEvent>(document.getElementById('countUp') as HTMLButtonElement, 'click')
      .pipe(
        //si está funcionando, emite para detener pero start sigue en true. da valor a direction
        tap(() => { 
          if(this.start){
          this.pauseDetector$.next('');}
          this.direction = true;          
        }),
        //mapeo para tener el contador de salida, sino da error. Si start es true, llamo a countUp. Esto se hace para cambiar de dirección sin parar.
        map( ev => this.counter ),
        switchMap(() => this.start ? this.countUp() : "")
      )  
    
    //Evento de click al count down
    this.countDown$ = fromEvent<MouseEvent>(document.getElementById('countDown') as HTMLButtonElement, 'click')
      .pipe(
        tap(() => {
          if(this.start){ 
          this.pauseDetector$.next('');}
          this.direction = false;
        }),
        map( ev => this.counter ),
        switchMap(() => this.start ? this.countDown() : "")
      )
    
    //mezclo los 3 eventos para tener la misma salida en counter
    merge(this.start$, this.pause$, this.reset$, this.countUp$, this.countDown$).subscribe(num => this.counter = num);

  }


  //Cuenta hacia adelante o atrás, para al recibir valor en pauseDetector
  countUp(){
    return interval(1000)
      .pipe(
        //scan recibe acumulador y actual y devuelve valor de uno en uno transformado.
        scan((acc, cur) => this.counter + this.form.value['step'], this.counter), //probando a quitar acc y poner directamente el contador para el reset sin parar
        takeUntil(this.pauseDetector$)
      )
  }

  countDown(){
    return interval(1000)
      .pipe( 
        scan((acc, cur) => this.counter - this.form.value['step'], this.counter),
        takeUntil(this.pauseDetector$)
      )
  }

}
