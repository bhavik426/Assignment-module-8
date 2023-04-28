import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssday1Ass3Component } from './cssday1-ass3.component';

describe('Cssday1Ass3Component', () => {
  let component: Cssday1Ass3Component;
  let fixture: ComponentFixture<Cssday1Ass3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssday1Ass3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cssday1Ass3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
