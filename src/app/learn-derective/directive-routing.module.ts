import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {LearnDirectiveComponent} from './learn-directive/learn-directive.component';


const router: Routes = [{
  path: '',
  component: LearnDirectiveComponent,
  pathMatch: 'full'
  }]
;
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  exports: [RouterModule],
  declarations: []
})
export class DirectiveRoutingModule { }
