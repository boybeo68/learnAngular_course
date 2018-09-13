import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-learn-directive',
  templateUrl: './learn-directive.component.html',
  styleUrls: ['./learn-directive.component.css']
})
export class LearnDirectiveComponent implements OnInit {
  public boolean = false;
  public timeDelay: Number = 0;
  showCpDelay = false;
  delayInSec = 0;
  dataInput = '';
  datavalidate = '' ;
  frmValidate: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  changeCondition(b: boolean) {
    this.boolean = b;
  }
  private createForm() {
    this.frmValidate = this.formBuilder.group({
      email: [''],
    });
  }
  onSubmitForm() {
    console.log(this.frmValidate);
  }
}
