import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingNavComponent } from './shopping-nav.component';

describe('ShoppingNavComponent', () => {
  let component: ShoppingNavComponent;
  let fixture: ComponentFixture<ShoppingNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
