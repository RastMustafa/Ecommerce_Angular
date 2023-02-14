import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPrevSlide]',
})
export class PrevSlideDirective {
  counter: number = 0;
  @HostListener('click') nextSlide(event: Event) {
    let slider =
      this.elementRef.nativeElement.parentElement.querySelector(
        '.cardContainer'
      );

    let cards = slider.getElementsByClassName('card');
    slider.prepend(cards[cards.length - 1]);
    for (let i = 0; i < cards.length; i++) {}
  }
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
}
