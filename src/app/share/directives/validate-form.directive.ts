import {Directive} from '@angular/core';
import {NG_VALIDATORS, Validators, AbstractControl} from '@angular/forms';

@Directive({
  selector: '[appValidateForm]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidateFormDirective, multi: true}]
})
export class ValidateFormDirective implements Validators {

  constructor() {
  }
  public validate(control: AbstractControl): { [key: string]: any } {
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    const valid = emailRegEx.test(control.value);
    console.log(valid);
    return control.value < 1 || valid ? null : {'appValidateForm': true};
  }
}
