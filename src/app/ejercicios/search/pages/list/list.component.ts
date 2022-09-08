import { Component, Input } from '@angular/core';
import { Universities } from '../../interfaces/universities.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  @Input()
  universities: Universities[] = [];

}
