import {AfterContentChecked, AfterViewChecked, Directive, DoCheck, ElementRef, OnInit} from '@angular/core';


@Directive({
  selector: '[appValidate]'
})
export class ValidateDirective implements OnInit {

  constructor(private erfElement: ElementRef) {
  }

  ngOnInit(): void {
    console.log('hello');
  }
}
