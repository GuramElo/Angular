import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HW0Component } from './hw0.component';

describe('HW0Component', () => {
  let component: HW0Component;
  let fixture: ComponentFixture<HW0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HW0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HW0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
