import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardComponent } from '../card/card.component';
import { CardfrontComponent } from '../card/cardfront/cardfront.component';
import { CardbackComponent } from '../card/cardback/cardback.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CardComponent,
    CardfrontComponent,
    CardbackComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  exports:[
    CardComponent,
    CardfrontComponent,
    CardbackComponent
  ]
})
export class CardModule { }
