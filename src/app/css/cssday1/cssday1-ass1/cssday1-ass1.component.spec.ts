import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssday1Ass1Component } from './cssday1-ass1.component';

describe('Cssday1Ass1Component', () => {
  let component: Cssday1Ass1Component;
  let fixture: ComponentFixture<Cssday1Ass1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssday1Ass1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cssday1Ass1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
