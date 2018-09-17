import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-err-validate',
  templateUrl: './err-validate.component.html',
  styleUrls: ['./err-validate.component.css']
})
export class ErrValidateComponent implements OnInit {
  @Input('control') control;

  constructor() {
  }

  ngOnInit() {
  }

  get message() {
    for (let err in this.control.errors) {
      if (this.control.dirty) {
        return this.ErrorMessage(err, this.control.errors[err]);
      }
    }
  }

  public ErrorMessage(err: string, value: any) {
    let message = {
      'required': 'required',
      'minlength': `minlength ${value.requiredLength}`,
      'maxlength': `maxlength ${value.requiredLength}`
    };
    return message[err];
  }
}
