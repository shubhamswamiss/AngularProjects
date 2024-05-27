import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective {

  constructor( private el:ElementRef, private renderer: Renderer2 ) { }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red','yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null,null);
  }

  private highlight(bgcolor: string | null,color: string | null) {
    this.renderer.setStyle(this.el.nativeElement,'background-color',bgcolor );
    this.renderer.setStyle(this.el.nativeElement,'color',color);
  }

}
 