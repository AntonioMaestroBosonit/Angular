import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../validators/validators.service';
import { CountriesService } from '../../services/countries.service';
import { CountryName } from '../../interfaces/countries.interface';
import { CrudService } from '../../services/crud.service';
import { User } from '../../interfaces/users.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  buttonEdit: boolean = false;    //Guardar - Editar
  UserId: number | undefined;     //User ID si viene de editar, sino no se usa.
  users: User[] = [];
  countries: CountryName[] = [];

  getUsers(){
    this.crudService.getUsers()
    .subscribe( users => {
      this.users = users
    });
  }

  form: FormGroup = this.fb.group(
    {
      username: [ , [ Validators.required,
                      Validators.pattern(this.validatorService.usernamePattern),
                    ] , ],
      email: [ , [ Validators.required,
                   Validators.pattern(this.validatorService.emailPattern),
                 ] , ],
      pass: [ , [Validators.required, Validators.minLength(4)]],
      passConfirm: [ , Validators.required ],
      country: [ '', Validators.required ],
      city: [ , Validators.required ],
      offers: [true],
    },
    {
      validators: [this.validatorService.passPattern('pass', 'passConfirm')],
    }
  );

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private countriesService: CountriesService,
    private crudService: CrudService
  ) {}

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe((countries) => {
      this.countries = countries;
    });

    this.getUsers();
  }

  validate( name: string ) {
    return this.form.controls[name]?.invalid 
        && this.form.controls[name]?.touched;
  }

  //@Output
  onUser(user: User) {
    this.form.setValue({
      username: user.username,
      email: user.email,
      pass: user.pass,
      passConfirm: user.pass,
      country: user.country,
      city: user.city,
      offers: user.offers,
    });

    this.buttonEdit = true;
    this.UserId = user.id;
  }

  save() {
    delete this.form.value['passConfirm'];
    this.form.value['id'] = this.UserId;
    
    // console.log(this.form.value);

    if (this.buttonEdit) {
      this.crudService.editUser(this.form.value)
        .subscribe((res) => {
          // console.log('actu', res);
          this.getUsers();
        })
    } else {
      this.crudService.newUser(this.form.value)
        .subscribe((res) => {
          // console.log('respuesta', res);
          this.getUsers();
        });
      }
      
      //reset y seteo valores
      this.form.reset();
      this.form.controls['offers'].setValue(true);
      this.form.controls['country'].setValue("");

      //Vuelvo a poner disponible el guardar y vacío el campo de Id(si no lo hago se queda en editar)
      this.buttonEdit = false;
      this.UserId = undefined;
  }
}
