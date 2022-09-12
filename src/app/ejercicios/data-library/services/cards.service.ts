import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cards } from '../interfaces/cards.interface';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  url: string = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'

  constructor( private http: HttpClient ) { }

  //Hago consulta completa a la bbdd y filtro mediante código porque tendría que hacer
  //3 peticiones para una gráfica.
  getAllCards(): Observable<Cards[]>{
    return this.http.get<Cards[]>( this.url )
  }
  
  getMagicCards(): Observable<Cards[]>{
    return this.http.get<Cards[]>(`${this.url}?type=spell card`)
  }

  getTrapCards(): Observable<Cards[]>{
    return this.http.get<Cards[]>(`${this.url}?type=trap card`)
  }

  getMonsterCards(): Observable<Cards[]>{
    return this.http.get<Cards[]>(`${this.url}?type=monster`)
  }
  
}