import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LearnDirectiveComponent } from './learn-directive/learn-directive.component';
import {DirectiveRoutingModule} from './directive-routing.module';
import {ShareModule} from '../share/share.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveRoutingModule
  ],
  declarations: [LearnDirectiveComponent]
})
export class LearnDerectiveModule { }
