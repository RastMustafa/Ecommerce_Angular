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
import { SpecialPackageComponent } from './special-package/special-package.component';
import { CardsSectionComponent } from './special-package/cards-section/cards-section.component';
import { ShowSectionComponent } from './special-package/show-section/show-section.component';
import { FooterComponent } from './footer/footer.component';

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
    SpecialPackageComponent,
    CardsSectionComponent,
    ShowSectionComponent,
    FooterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
