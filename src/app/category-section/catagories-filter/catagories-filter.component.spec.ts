import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoriesFilterComponent } from './catagories-filter.component';

describe('CatagoriesFilterComponent', () => {
  let component: CatagoriesFilterComponent;
  let fixture: ComponentFixture<CatagoriesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagoriesFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatagoriesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
