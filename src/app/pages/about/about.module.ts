import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';

const ROUTE = [
  { path: '', component: AboutComponent }
];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE),
    FlexLayoutModule,
    MatToolbarModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
