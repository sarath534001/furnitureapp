import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoammattressComponent } from './foammattress.component';

describe('FoammattressComponent', () => {
  let component: FoammattressComponent;
  let fixture: ComponentFixture<FoammattressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoammattressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoammattressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
