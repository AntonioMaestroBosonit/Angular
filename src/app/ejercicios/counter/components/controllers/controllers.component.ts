import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-controllers',
  templateUrl: './controllers.component.html'
})
export class ControllersComponent implements OnInit {

  form: FormGroup = this.fb.group(        //Contiene el value del select
    {
      stepTo: 0,
      step: 0
    }
  )

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
