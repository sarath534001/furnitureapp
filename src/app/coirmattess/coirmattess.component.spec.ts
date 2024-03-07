import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoirmattessComponent } from './coirmattess.component';

describe('CoirmattessComponent', () => {
  let component: CoirmattessComponent;
  let fixture: ComponentFixture<CoirmattessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoirmattessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoirmattessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
