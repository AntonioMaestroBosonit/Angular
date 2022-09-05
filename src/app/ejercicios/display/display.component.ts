import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html'
})
export class DisplayComponent {
  
  status: boolean = false;

  showImage() {
    return this.status = !this.status
  }
}