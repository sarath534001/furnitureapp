import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ordersform1Component } from './ordersform1.component';

describe('Ordersform1Component', () => {
  let component: Ordersform1Component;
  let fixture: ComponentFixture<Ordersform1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ordersform1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ordersform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
