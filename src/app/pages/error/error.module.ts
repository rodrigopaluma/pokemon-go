import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

const ROUTE = [
  { path: '', component: ErrorComponent }
];

@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE),
    FlexLayoutModule
  ],
  exports: [ErrorComponent]
})
export class ErrorModule { }
