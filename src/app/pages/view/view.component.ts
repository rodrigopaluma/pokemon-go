import { Component, OnInit } from '@angular/core';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  pokemons: any;
  original: any;
  inicio = 0;
  qnt = 1;
  isSmallScreen;
  inputSearch: FormControl = new FormControl('');

  constructor(breakpointObserver: BreakpointObserver,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder) {
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
        })
        this.pokemons = cards;
        this.original = cards;
        // console.log(this.pokemons);
      })
      .catch(error => {
        // do something with the error
      });
  }

}
