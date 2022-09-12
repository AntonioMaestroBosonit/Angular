import { Component, OnInit } from '@angular/core';
import { Cards } from '../interfaces/cards.interface';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-data-library',
  templateUrl: './data-library.component.html'
})
export class DataLibraryComponent implements OnInit {
  
  cards: Cards[] | any = [];
  loaded: boolean = false;

  constructor( private cardsService: CardsService ){}

  ngOnInit(): void {
    this.cardsService.getAllCards().subscribe((cards) => {
      this.cards = cards;
      this.loaded = true;
    })
  }

}
