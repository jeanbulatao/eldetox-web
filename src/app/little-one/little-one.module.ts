import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LittleOneRoutingModule } from './little-one-routing.module';
import { LittleOneComponent } from './little-one.component';


@NgModule({
  declarations: [
    LittleOneComponent
  ],
  imports: [
    CommonModule,
    LittleOneRoutingModule
  ]
})
export class LittleOneModule { }
