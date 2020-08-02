import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    CdkScrollableModule,
    RouterModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
