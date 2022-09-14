import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, scan, switchMap, tap, Subject, map } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [`
    h1{ font-size: 70px}
  `]
})
export class CounterComponent implements OnInit {

  counter: number = 0;
  step: number = 1;

  //Inicio los observables
  pauseCounter$:Subject<any> = new Subject;
  start$:Observable<any> = new Observable;
  pause$:Observable<any> = new Observable;

  constructor( ) { }

  ngOnInit(): void {
    //Doy valor a los observables. Este hace el evento de click al start y ejecuta cuenta hacia arriba
    this.start$ = fromEvent<MouseEvent>(document.getElementById('start') as HTMLButtonElement, 'click')
      .pipe(
        switchMap(() => this.counterUp())
      );

    this.pause$ = fromEvent<MouseEvent>(document.getElementById('pause') as HTMLButtonElement, 'click')
      .pipe(
        tap(() => this.pauseCounter$.next('')),
        map(num => this.counter)
      );
    
    this.start$.subscribe(num => this.counter = num);

  }

  counterUp(){
    return interval(1000)
      .pipe(
        scan((acc, cur) => acc + this.step, this.counter)
      )
  }

}
