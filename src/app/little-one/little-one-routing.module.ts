import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LittleOneComponent } from './little-one.component';

const routes: Routes = [{ path: '', component: LittleOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LittleOneRoutingModule { }
