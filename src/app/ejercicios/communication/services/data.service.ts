import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Con service
  ParentText: string = 'CHILD USING SERVICE'; 
  ChildText: string = 'PARENT USING SERVICE';
  
  //Con observable
  private parentText$ = new Subject<string>();      //$ para indicar que es observable
  private childText$ = new Subject<string>();

  setParent$(): void {
    this.parentText$.next('PARENT USING SUBJECT');
  }

  getParent$(): Observable<string> {
    return this.parentText$.asObservable();
  }

  setChild$(): void {
    this.childText$.next('CHILD USING SUBJECT');
  }

  getChild$(): Observable<string> {
    return this.childText$.asObservable();
  }
}
