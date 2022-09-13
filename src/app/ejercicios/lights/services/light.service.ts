import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LightService {

  private light$ = new Subject<string>()

  getLight(): Observable<string> {
    return this.light$.asObservable()
  }

  setColor(color: string): void{
    this.light$.next(color)
  }

}
