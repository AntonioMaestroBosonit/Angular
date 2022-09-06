import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../validators/validators.service';
import { CountriesService } from '../../services/countries.service';
import { CountryName } from '../../interfaces/countries.interface';
import { CrudService } from '../../services/crud.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  form: FormGroup = this.fb.group({
    username: [ , [ Validators.required, Validators.pattern( this.validatorService.usernamePattern ) ] ],
    email: [ , [ Validators.required, Validators.pattern( this.validatorService.emailPattern )] ],
    pass: [ , [Validators.required, Validators.minLength(4)] ],
    passConfirm: [ , Validators.required],
    country: [ "", Validators.required],
    city: [ , Validators.required],
    offers: [true]
  }, {
    validators: [ this.validatorService.passPattern( 'pass', 'passConfirm' )]
  });

  countries: CountryName[] = [];

  constructor( private fb: FormBuilder,
               private validatorService: ValidatorService,
               private countriesService: CountriesService,
               private crudService: CrudService ) { }

    ngOnInit(): void {
      this.countriesService.getCountries()
        .subscribe( countries => {
          this.countries = countries;
        })
    }

  save() {

    delete this.form.value['passConfirm']

    this.crudService.newUser( this.form.value )
      .subscribe( res => {
        console.log('respuesta', res);
      })

    this.form.reset();
    // this.form.controls['offers'].setValue(true)
    
  }
}
