import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styles:[
    `
    .padre {
      border: solid 1px blue;
      padding: 5px; 
    }
    .hijo {
      border: solid 1px blue;
    }
    button {
      margin: 5px;
    }
    `
  ]
})
export class CommunicationComponent implements OnInit {

  //Variables para enviar
  parentText: string = '';
  childText: string = '';

  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
    this.dataService.getParent$().subscribe(txt => this.childText = txt);
    this.dataService.getChild$().subscribe(txt => this.parentText = txt);

  }


  //Métodos click
  //Service
  serviceChild(): void {
    this.childText = this.dataService.ChildText;
  }
  
  //Input y Output
  inputChild ():void {
    this.childText = 'PARENT USING INPUT PROPERTY';
  }

  parentMsg (msg: string): void {
    this.parentText = msg;
  }

  //Observable
  observableChild(): void {
    this.dataService.setParent$()
  }
}