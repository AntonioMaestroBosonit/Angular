import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( private http: HttpClient ) { }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:3000/usuarios')
  }
}
