import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appTungIf]'
})
export class StrucDefaultDirective {

  constructor(private templateRef: TemplateRef<any>, private containerRef: ViewContainerRef) {
  }

  @Input() set appTungIf(boolean: boolean) {
    if (boolean) {
      this.containerRef.createEmbeddedView(this.templateRef);
    } else {
      this.containerRef.clear();
    }
  }
}
