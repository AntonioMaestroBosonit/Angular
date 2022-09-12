import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Cards } from '../../interfaces/cards.interface';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { monsterAtrib } from '../../interfaces/data.interface';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html'
})
export class BarComponent implements OnInit {
  //Para actualizar los valores de la gráfica
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  
  //Declaraciones
  @Input()
  cards: Cards[] | any = [];

  barData: monsterAtrib = {
    Dark: 0,
    Earth: 0,
    Fire: 0,
    Light: 0,
    Water: 0,
    Wind: 0
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 0
      }
    }
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [ 'Oscuridad', 'Tierra', 'Fuego', 'Luz', 'Agua', 'Viento' ],
    datasets: [
      { data: [ ], label: 'Atributos de monstruo' },
    ]
  };

  constructor() { }

  ngOnInit(): void {
    this.bar();
  }

  bar(): void {
    let dark: Cards[] = this.cards.data.filter((card: any) => card['attribute'] == 'DARK');
    let earth: Cards[] = this.cards.data.filter((card: any) => card['attribute'] == 'EARTH');
    let fire: Cards[] = this.cards.data.filter((card: any) => card['attribute'] == 'FIRE');
    let light: Cards[] = this.cards.data.filter((card: any) => card['attribute'] == 'LIGHT');
    let water: Cards[] = this.cards.data.filter((card: any) => card['attribute'] == 'WATER');
    let wind: Cards[] = this.cards.data.filter((card: any) => card['attribute'] == 'WIND');

    this.barData = {
      Dark: dark.length,
      Earth: earth.length,
      Fire: fire.length,
      Light: light.length,
      Water: water.length,
      Wind: wind.length
    }

    this.barChartData.datasets[0].data = [ this.barData['Dark'], this.barData['Earth'], this.barData['Fire'],
                                           this.barData['Light'], this.barData['Water'], this.barData['Wind'] ];
    this.chart?.update();
  }

}
