import {Directive, TemplateRef, Input, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
  }
  @Input() set appDelay(number: Number) {
    this.viewContainer.clear();
    setTimeout(() => {
        this.viewContainer.createEmbeddedView(this.templateRef);
    }, number);
  }
}
