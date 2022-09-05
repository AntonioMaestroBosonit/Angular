import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {

  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    pass: ['', Validators.required],
    passConfirm: ['', Validators.required],
    country: ['', Validators.required],
    city: ['', Validators.required],
    offers: [true]
  });

  constructor( private fb: FormBuilder ) { }

}
