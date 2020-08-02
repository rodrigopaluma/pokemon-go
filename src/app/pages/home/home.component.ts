import { Component, OnInit } from '@angular/core';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemons: any;
  inicio = 0;
  qnt = 1;
  isSmallScreen;

  constructor(breakpointObserver: BreakpointObserver) {
    this.isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
  }

  ngOnInit(): void {
    this.qnt = this.isSmallScreen ? 1 : 8;
    PokemonTCG.Card.all()
      .then(cards => {
        cards.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        })
        this.pokemons = cards;
        // console.log(this.pokemons);
      })
      .catch(error => {
        // do something with the error
      });
  }

}
