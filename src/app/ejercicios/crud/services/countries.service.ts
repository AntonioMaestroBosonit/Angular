import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryName } from '../interfaces/countries.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor( private http: HttpClient ) {}

  getCountries(): Observable<CountryName[]>{
    return this.http.get<CountryName[]>('https://restcountries.com/v2/all?fields=name');
  }
   
}
