import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appValidationDirective]'
})
export class ValidationDirectiveDirective {

  constructor(private el: ElementRef , private renderer: Renderer2) { }
   
  @HostListener('input', ['$event']) onInput(event: Event) {
    const input = this.el.nativeElement as HTMLInputElement;
    const regex = /[^a-zA-Z0-9]/g;
    const newValue = input.value.replace(regex, '');
    
    // Use Renderer2 to set the element's value`  
    this.renderer.setProperty(input, 'value', newValue);
  }

}
