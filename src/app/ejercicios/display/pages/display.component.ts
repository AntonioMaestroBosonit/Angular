import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styles: [
    `
      img {
        margin-left: 95px;
      }
    `,
  ],
})
export class DisplayComponent {
  status: boolean = false;

  showImage() {
    return (this.status = !this.status);
  }
}
