import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainShoppingComponent } from './main-shopping.component';

describe('MainShoppingComponent', () => {
  let component: MainShoppingComponent;
  let fixture: ComponentFixture<MainShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainShoppingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
