import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutProcesarComponent } from './checkout-procesar.component';

describe('CheckoutProcesarComponent', () => {
  let component: CheckoutProcesarComponent;
  let fixture: ComponentFixture<CheckoutProcesarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutProcesarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutProcesarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
