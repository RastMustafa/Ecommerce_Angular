import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNextSlide]',
})
export class NextSlideDirective {
  counter: number = 0;
  @HostListener('click') nextSlide(event: Event) {
    let slider =
      this.elementRef.nativeElement.parentElement.querySelector(
        '.cardContainer'
      );

    let cards = slider.getElementsByClassName('card');
    cards = [...cards, cards[0]];
    for (let i = 0; i < cards.length; i++) {
      slider.append(cards[i]);
    }
  }
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
}
