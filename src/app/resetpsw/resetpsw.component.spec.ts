import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpswComponent } from './resetpsw.component';

describe('ResetpswComponent', () => {
  let component: ResetpswComponent;
  let fixture: ComponentFixture<ResetpswComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetpswComponent]
    });
    fixture = TestBed.createComponent(ResetpswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
