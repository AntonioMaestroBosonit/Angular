import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter$ = new Subject<number>()

  getNumber(): Observable<number> {
    return this.counter$.asObservable()
  }

  constructor() { }
}
