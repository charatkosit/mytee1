import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tee2Component } from './tee2.component';

describe('Tee2Component', () => {
  let component: Tee2Component;
  let fixture: ComponentFixture<Tee2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tee2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tee2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
