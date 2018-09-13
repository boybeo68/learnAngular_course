import {Directive, ElementRef, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirectiveDirective implements AfterViewInit {

  constructor(private ref: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.ref.nativeElement.style.color = 'red';
    this.ref.nativeElement.style.fontSize = '30px';
  }
}
