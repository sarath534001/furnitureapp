import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurlonComponent } from './kurlon.component';

describe('KurlonComponent', () => {
  let component: KurlonComponent;
  let fixture: ComponentFixture<KurlonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KurlonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KurlonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
