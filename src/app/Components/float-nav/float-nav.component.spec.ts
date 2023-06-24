import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatNavComponent } from './float-nav.component';

describe('FloatNavComponent', () => {
  let component: FloatNavComponent;
  let fixture: ComponentFixture<FloatNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatNavComponent]
    });
    fixture = TestBed.createComponent(FloatNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
