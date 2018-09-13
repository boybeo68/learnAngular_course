import {Directive, ViewContainerRef, TemplateRef, Input} from '@angular/core';

@Directive({
  selector: '[appStrucLoop]'
})
export class StrucLoopDirective {

  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<any>) {
  }

  @Input('appStrucLoop') set loop(number: Number) {
    for (let i = 0; i <= number; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
