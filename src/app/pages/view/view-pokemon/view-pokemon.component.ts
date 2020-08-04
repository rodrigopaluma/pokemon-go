import { Component, OnInit, Inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemons, IAttack } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-view-pokemon',
  templateUrl: './view-pokemon.component.html',
  styleUrls: ['./view-pokemon.component.scss']
})
export class ViewPokemonComponent implements OnInit {

  isSmallScreen: boolean;
  card: any;

  constructor(breakpointObserver: BreakpointObserver,
              private activatedRoute: ActivatedRoute,
              public dialog: MatDialog,
              private pokemonsService: PokemonService) {
    this.isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.pokemonsService.getPokemon(params.id).subscribe(value => {
          this.card = value.card;
        });
      }
    });
  }


  openAtacks(attack) {
    const dialogRef = this.dialog.open(ModalPokemonDetail, {
      data: {
        pokemon: this.card,
        attack
      }
    });
  }

  openImage() {
    const dialogRef = this.dialog.open(ModalPokemonImage, {
      data: {
        pokemon: this.card
      }
    });
  }

}

// tslint:disable-next-line: member-ordering
@Component({
  selector: 'app-modal-pokemon-detail',
  templateUrl: './modal-pokemon-detail.html',
})
// tslint:disable-next-line: component-class-suffix
export class ModalPokemonDetail {
  card: Pokemons;
  attack: IAttack;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.card = data.pokemon;
    this.attack = data.attack;
  }
}

// tslint:disable-next-line: member-ordering
@Component({
  selector: 'app-modal-pokemon-image',
  templateUrl: './modal-pokemon-image.html',
})
// tslint:disable-next-line: component-class-suffix

export class ModalPokemonImage {
  card: Pokemons;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.card = data.pokemon;
  }
}
