import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universities } from '../interfaces/universities.interface';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {

  private url: string = 'http://localhost:3000/universidades'

  constructor( private http: HttpClient ) {}

  // name_like para que busque contenido, no literal
  getUniversities( country: string, name: string): Observable<Universities[]>{
    return this.http.get<Universities[]>(`${this.url}?name_like=${name}&country=${country}`)
  }
  
}
