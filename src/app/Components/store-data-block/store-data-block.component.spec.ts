import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDataBlockComponent } from './store-data-block.component';

describe('StoreDataBlockComponent', () => {
  let component: StoreDataBlockComponent;
  let fixture: ComponentFixture<StoreDataBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreDataBlockComponent]
    });
    fixture = TestBed.createComponent(StoreDataBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
