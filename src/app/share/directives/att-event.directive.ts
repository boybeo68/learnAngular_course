import {Directive, ElementRef, AfterViewInit, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appAttEvent]'
})
export class AttEventDirective {

  constructor(private ref: ElementRef) {
  }

  @Input() defaultValue: string;

  @HostListener('click') onclick() {
    this.changeColor('blue');
  }

  @HostListener('mousemove') onMove() {
    this.changeColor('yellow');
  }

  @HostListener('mouseleave') onMoveleave() {
    this.changeColor(this.defaultValue);
  }

  private changeColor(color: string) {
    this.ref.nativeElement.style.color = color;
  }
}
