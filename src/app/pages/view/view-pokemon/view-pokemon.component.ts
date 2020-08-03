import { Component, OnInit, Inject } from '@angular/core';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Card } from 'pokemon-tcg-sdk-typescript/dist/sdk';

@Component({
  selector: 'app-view-pokemon',
  templateUrl: './view-pokemon.component.html',
  styleUrls: ['./view-pokemon.component.scss']
})
export class ViewPokemonComponent implements OnInit {

  isSmallScreen;
  card;

  constructor(breakpointObserver: BreakpointObserver,
              private activatedRoute: ActivatedRoute,
              public dialog: MatDialog) {
    this.isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        console.log(params.id)
        PokemonTCG.Card.find(params.id)
        .then(card => {
          this.card = card;
          // console.log(card);
        })
        .catch(error => console.log(error));
      }
    });
  }


  openAtacks() {
    const dialogRef = this.dialog.open(ModalPokemonDetail, {
      data: {
        pokemon: this.card
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openImage() {
    const dialogRef = this.dialog.open(ModalPokemonImage, {
      data: {
        pokemon: this.card
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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
  card;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.card = data.pokemon;
  }
}

// tslint:disable-next-line: member-ordering
@Component({
  selector: 'app-modal-pokemon-image',
  templateUrl: './modal-pokemon-image.html',
})
// tslint:disable-next-line: component-class-suffix

export class ModalPokemonImage {
  card;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.card = data.pokemon;
  }
}
