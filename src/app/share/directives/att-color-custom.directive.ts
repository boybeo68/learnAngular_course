import {Directive, ElementRef, AfterViewInit, Input} from '@angular/core';

@Directive({
  selector: '[appAttColorCustom]'
})
export class AttColorCustomDirective implements AfterViewInit {

  @Input('cpColor') cpColor: string;
  @Input() cpColorbind: string ;

  constructor(private ref: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.cpColor = this.cpColor || 'green';
    this.cpColorbind = this.cpColorbind || 'green';
    this.ref.nativeElement.style.color = this.cpColorbind;
  }

}
