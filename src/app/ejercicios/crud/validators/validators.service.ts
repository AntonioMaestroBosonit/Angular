import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService implements AsyncValidator {

  public usernamePattern: string = '[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*';  //Exp regular que permite muchas palabras y símbolos
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';  //Exp regular normal de un email

  constructor( private http: HttpClient ) { }

  //hay que implementarlo al submit
  validate( control: AbstractControl ): Observable<ValidationErrors | null> {

    const email = control.value;
    // console.log( email );
    

    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${ email }`)
  }

  passPattern( field1: string, field2: string ) {
    return ( formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(field1)?.value;
      const pass2 = formGroup.get(field2)?.value;

      if ( pass1 !== pass2 ) {
        formGroup.get(field2)?.setErrors({ noIguales: true })
        return { noIguales: true }
      }

      formGroup.get(field2)?.setErrors( null )

      return null;
      
    }
  }
}
