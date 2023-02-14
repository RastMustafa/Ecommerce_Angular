import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CategorySectionComponent } from './category-section/category-section.component';
import { CatagoriesFilterComponent } from './category-section/catagories-filter/catagories-filter.component';
import { CatagoriesDisplayComponent } from './category-section/catagories-display/catagories-display.component';
import { PopularProductsComponent } from './popular-products/popular-products.component';
import { NextSlideDirective } from './directives/next-slide/next-slide.directive';
import { PrevSlideDirective } from './directives/prev-silde/prev-slide.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    CategorySectionComponent,
    CatagoriesFilterComponent,
    CatagoriesDisplayComponent,
    PopularProductsComponent,
    NextSlideDirective,
    PrevSlideDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
