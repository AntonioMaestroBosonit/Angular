import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartType } from 'chart.js'
import { BaseChartDirective } from 'ng2-charts';
import { Cards } from '../../interfaces/cards.interface';
import { cardType } from '../../interfaces/data.interface';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html'
})
export class DonutComponent implements OnInit {
  
  //Para actualizar los valores de la gráfica
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  
  //Declaraciones
  @Input()
  cards: Cards[] | any = [];
  
  donutData: cardType = {
    monster: 0,
    magic: 0,
    trap: 0
  }

  //Gráfica
  public donutChartLabels: string[] = ['Monstruos', 'Mágicas', 'Trampas'];
  public donutChartData: ChartData<'doughnut'> = {
    labels: this.donutChartLabels,
    datasets: [
      { data: [ ],
        backgroundColor: [ '#a07251', '#4aa092', '#942979' ] }
    ]
  };
  public donutChartType: ChartType = 'doughnut';

  constructor( ) { }

  ngOnInit(): void {
    this.donut();
  }

  donut(): void {
    
    let magic: Cards[] = this.cards.data.filter((card: any) => card['type'] == 'Spell Card');
    let trap: Cards[] = this.cards.data.filter((card: any) => card['type'] == 'Trap Card');
    let monster: number = this.cards.data.length - magic.length - trap.length;

    this.donutData = {
      monster: monster,
      magic: magic.length,
      trap: trap.length
    }
    
    this.donutChartData.datasets[0].data = [ this.donutData['monster'], this.donutData['magic'], this.donutData['trap'] ]
    
    this.chart?.update();
  }

}
