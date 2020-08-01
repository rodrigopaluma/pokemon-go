import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardModule } from 'src/app/shared/card/card.module';
import { CarouselComponent, CarouselItemElement } from 'src/app/shared/carousel/carousel.component';
import { CarouselItemDirective } from 'src/app/directives/carousel-item.directive';

const ROUTE = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent, CarouselComponent, CarouselItemDirective, CarouselItemElement],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE),
    FlexLayoutModule,
    CardModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
