import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles:[
    `
      button {
        margin: 5px;
    }
    `
  ]
})
export class ChildComponent implements OnInit {

  @Input() childMsg: string = '';
  @Output() parentEv: EventEmitter<string> = new EventEmitter<string>();

  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
  }

  //Métodos click
  //service
  serviceToParent(): void {
    this.parentEv.emit ( this.dataService.ParentText )
  }

  //output
  outputToParent(){
    this.parentEv.emit('CHILD USING OUTPUT EVENT')
  }

  //observable
  observableToParent(): void {
    this.dataService.setChild$()
  }

}
