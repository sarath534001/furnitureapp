import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customerorders1Component } from './customerorders1.component';

describe('Customerorders1Component', () => {
  let component: Customerorders1Component;
  let fixture: ComponentFixture<Customerorders1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Customerorders1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Customerorders1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
