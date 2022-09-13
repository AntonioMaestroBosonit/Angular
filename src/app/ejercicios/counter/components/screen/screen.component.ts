import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html'
})
export class ScreenComponent implements OnInit {

  @Input()
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
