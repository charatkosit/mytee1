import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Float2Component } from './float2.component';

describe('Float2Component', () => {
  let component: Float2Component;
  let fixture: ComponentFixture<Float2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Float2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Float2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
