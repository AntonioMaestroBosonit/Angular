import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LightService } from '../../services/light.service';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styles: [`
    .trafficLights{
      height: 320px;
      width: 130px;
      border-radius: 10px;
      background-color: black;
    }
    .light{
      height: 80px;
      width: 80px;
      border-radius: 50%;
    }
  `]
})
export class TrafficLightComponent implements OnInit {


  subscription: Subscription = new Subscription
  color: string = '';

  constructor( private lightService: LightService ) { }

  ngOnInit(): void {
    this.subscription = this.lightService.getLight().subscribe( color => {
      this.color = color;
    })
  }


  //[class], si está es su color y sino es gris
  red(){
    return (this.color === 'red') ? 'bg-danger' : 'bg-secondary'
  }
  orange(){
    return (this.color === 'orange') ? 'bg-warning' : 'bg-secondary'
  }
  green(){
    return (this.color === 'green') ? 'bg-success' : 'bg-secondary'
  }

}
