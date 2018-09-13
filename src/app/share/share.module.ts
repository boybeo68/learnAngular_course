import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ColorDirectiveDirective} from './directives/color-directive.directive';
import {AttColorCustomDirective} from './directives/att-color-custom.directive';
import {AttEventDirective} from './directives/att-event.directive';
import {StrucDefaultDirective} from './directives/struc-default.directive';
import {StrucLoopDirective} from './directives/struc-loop.directive';
import {DelayDirective} from './directives/delay.directive';
import { FocusFormDirective } from './directives/focus-form.directive';
import { ValidateFormDirective } from './directives/validate-form.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ColorDirectiveDirective,
    AttColorCustomDirective,
    AttEventDirective,
    StrucDefaultDirective,
    StrucLoopDirective,
    DelayDirective,
    FocusFormDirective,
    ValidateFormDirective
  ],
  declarations: [ColorDirectiveDirective,
    AttColorCustomDirective,
    AttEventDirective,
    StrucDefaultDirective,
    StrucLoopDirective,
    DelayDirective,
    FocusFormDirective,
    ValidateFormDirective]
})
export class ShareModule {
}
