import { Component, Input } from '@angular/core';
import { Universities } from '../../interfaces/universities.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [`
    li:hover {
      background-color: #CACACA;
      cursor: pointer;
    }
  `]
})
export class ListComponent {

  @Input()
  universities: Universities[] = [];

}
