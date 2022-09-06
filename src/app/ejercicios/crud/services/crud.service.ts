import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( private http: HttpClient ) { }

  //READ
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/usuarios')
  }

  //CREATE
  newUser( user: User ): Observable<User>{
    return this.http.post<User>(`http://localhost:3000/usuarios`, user)
  }
}
