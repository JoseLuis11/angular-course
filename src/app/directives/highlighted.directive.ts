import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {

  @Input('highlighted') newColor = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.newColor || 'yellow')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null)
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color
  }

}
