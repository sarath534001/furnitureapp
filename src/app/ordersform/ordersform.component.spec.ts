import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersformComponent } from './ordersform.component';

describe('OrdersformComponent', () => {
  let component: OrdersformComponent;
  let fixture: ComponentFixture<OrdersformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdersformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdersformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
