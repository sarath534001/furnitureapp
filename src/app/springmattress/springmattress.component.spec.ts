import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringmattressComponent } from './springmattress.component';

describe('SpringmattressComponent', () => {
  let component: SpringmattressComponent;
  let fixture: ComponentFixture<SpringmattressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpringmattressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpringmattressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
