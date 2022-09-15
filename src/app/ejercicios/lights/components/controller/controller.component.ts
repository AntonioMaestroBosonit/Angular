import { Component, OnInit } from '@angular/core';
import { LightService } from '../../services/light.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html'
})
export class ControllerComponent implements OnInit {

  subscription: Subscription = new Subscription
  color: string = "";
  status: boolean = false;                //Flag para el botón. estado de suscripción
  form: FormGroup = this.fb.group(        //Contiene el value del select
    {
      color: ""
    }
  )

  constructor( private lightService: LightService,
               private fb: FormBuilder ) { }

  ngOnInit(): void {
    //Inicio usando subscription para poder hacer unsubscribe
    this.subscription = this.lightService.getLight().subscribe( color => {
      this.color = color;
      this.status = true;
    });
    //Pongo color rojo
    this.lightService.setColor('red');
    this.form.setValue(
      { color: this.color }
    )
  }

  //Se aplica cuando el valor del formulario cambia si estamos suscritos
  lightChange(): void{  
    this.status ? (
    this.lightService.setColor(this.form.value['color'])
    ) : (
      ''
    )
  }

  //Botón
  onOff(): void{
    (this.status) ? (
      this.subscription.unsubscribe(),
      this.status = false,
      this.lightService.setColor('')
     ) : (
      this.subscription = this.lightService.getLight().subscribe( color => {
        this.color = color;
        this.status = true;
      }),
      this.lightService.setColor('red'),
      this.form.setValue(
        { color: this.color }
      )
     )
  }

}
