import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {

  @Input() appFontSize: number = 50;

  constructor(private elementRef: ElementRef, private renderer: Renderer2 ) {
    this.establecerTamano();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.establecerTamano();
  }

  establecerTamano(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', `${this.appFontSize}px`);
  }

}