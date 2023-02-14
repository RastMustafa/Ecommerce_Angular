import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPackageComponent } from './special-package.component';

describe('SpecialPackageComponent', () => {
  let component: SpecialPackageComponent;
  let fixture: ComponentFixture<SpecialPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
