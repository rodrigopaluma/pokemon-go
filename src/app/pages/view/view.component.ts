import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemons } from 'src/app/models/pokemon.model';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  pokemons: Pokemons[];
  original: Pokemons[];
  inicio = 0;
  qnt = 1;
  isSmallScreen: boolean;
  inputSearch: FormControl = new FormControl('');

  constructor(breakpointObserver: BreakpointObserver,
              private pokemonsService: PokemonService) {
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
    this.pokemonsService.getPokemons().subscribe(values => {
      const cards: Pokemons[] = values.cards;
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
    });

  }

}
