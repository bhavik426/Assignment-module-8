import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssday1Ass2Component } from './cssday1-ass2.component';

describe('Cssday1Ass2Component', () => {
  let component: Cssday1Ass2Component;
  let fixture: ComponentFixture<Cssday1Ass2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssday1Ass2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cssday1Ass2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
