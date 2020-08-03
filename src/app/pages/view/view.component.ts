import { Component, OnInit } from '@angular/core';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  pokemons: PokemonTCG.Card[];
  original: PokemonTCG.Card[];
  inicio = 0;
  qnt = 1;
  isSmallScreen: boolean;
  inputSearch: FormControl = new FormControl('');

  constructor(breakpointObserver: BreakpointObserver) {
    this.isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
  }

  ngOnInit(): void {
    this.inputSearch.valueChanges.subscribe(term => {
      this.pokemons = this.original.filter(value => {
        if (value.name.toLowerCase().includes(term.toLowerCase())) {
          return value;
        }
      });
    });
    this.qnt = this.isSmallScreen ? 1 : 16;
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
        });
        this.pokemons = cards;
        this.original = cards;
      })
      .catch(error => {
        console.log(error);
      });
  }

}
