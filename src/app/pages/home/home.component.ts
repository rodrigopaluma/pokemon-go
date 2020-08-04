import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemons } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemons: Pokemons[];
  inicio = 0;
  qnt = 1;
  isSmallScreen;

  constructor(breakpointObserver: BreakpointObserver,
              private pokemonsService: PokemonService) {
    this.isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
  }

  ngOnInit(): void {
    this.qnt = this.isSmallScreen ? 1 : 8;
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
      });
  }

}
