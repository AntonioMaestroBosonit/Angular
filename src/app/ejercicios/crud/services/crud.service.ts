import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private base: string = 'http://localhost:3000/usuarios'

  constructor( private http: HttpClient ) { }

  //READ
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${ this.base }`);
  }

  //CREATE
  newUser( user: User ): Observable<User>{
    return this.http.post<User>(`${ this.base }`, user);
  }

  //EDIT
  editUser ( user: User ): Observable<User>{
    return this.http.put<User>(`${ this.base }/${ user.id }`, user);
  }

  //DELETE
  deleteUser ( id:number | undefined ): Observable<any>{
    return this.http.delete<any>(`${ this.base }/${ id }`);
  }
}
