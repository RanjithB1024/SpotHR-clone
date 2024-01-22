import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgoalsComponent } from './viewgoals.component';

describe('ViewgoalsComponent', () => {
  let component: ViewgoalsComponent;
  let fixture: ComponentFixture<ViewgoalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewgoalsComponent]
    });
    fixture = TestBed.createComponent(ViewgoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
