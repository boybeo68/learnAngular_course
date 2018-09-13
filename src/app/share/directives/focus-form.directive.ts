import {Directive, HostListener, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appFocusForm]'
})
export class FocusFormDirective {

  constructor(private ref: ElementRef) {
  }

  public data = '';

  @Input() set appFocusForm(data: string) {
    this.data = data;
  }

  @HostListener('focus') mouseFocus() {
    console.log(this.data);
  }
}
