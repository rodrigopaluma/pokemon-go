import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CardModule } from 'src/app/shared/card/card.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ViewPokemonComponent, ModalPokemonDetail, ModalPokemonImage } from './view-pokemon/view-pokemon.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

const ROUTE = [
  { path: '', component: ViewComponent },
  { path: ':id', component: ViewPokemonComponent }
];

@NgModule({
  entryComponents: [ ModalPokemonDetail, ModalPokemonImage ],
  declarations: [ViewComponent, ViewPokemonComponent, ModalPokemonDetail, ModalPokemonImage],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE),
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    CardModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  exports: [
    ViewComponent
  ]
})
export class ViewModule { }
