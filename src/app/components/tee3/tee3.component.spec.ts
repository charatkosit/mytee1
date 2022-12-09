import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tee3Component } from './tee3.component';

describe('Tee3Component', () => {
  let component: Tee3Component;
  let fixture: ComponentFixture<Tee3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tee3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tee3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
