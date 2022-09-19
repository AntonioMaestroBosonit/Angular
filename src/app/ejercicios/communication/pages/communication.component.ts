import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styles:[
    `
    .padre {
      /* border: solid 1px black; */
      padding: 5px;
      margin-right: 5px;
      border-radius: 10px;
      background-color: #CACACA;
      text-align: center;
    }
    .hijo {
      border: solid 1px #CACACA;
      /* padding: 5px; */
      margin: 5px;
      border-radius: 10px;
      background-color: white;
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
  serviceToChild(): void {
    this.childText = this.dataService.ChildText;
  }
  
  //Input y Output
  inputToChild ():void {
    this.childText = 'PARENT USING INPUT PROPERTY';
  }

  parentMsg (msg: string): void {
    this.parentText = msg;
  }

  //Observable
  observableToChild(): void {
    this.dataService.setParent$()
  }
}