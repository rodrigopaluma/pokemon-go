import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const ROUTE = [
  { path: '', component: ViewComponent }
];

@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE),
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    ViewComponent
  ]
})
export class ViewModule { }
