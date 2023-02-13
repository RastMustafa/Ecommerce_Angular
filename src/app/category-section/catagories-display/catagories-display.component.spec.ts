import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoriesDisplayComponent } from './catagories-display.component';

describe('CatagoriesDisplayComponent', () => {
  let component: CatagoriesDisplayComponent;
  let fixture: ComponentFixture<CatagoriesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagoriesDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatagoriesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
