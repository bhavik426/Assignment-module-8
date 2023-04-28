import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssday2Ass3Component } from './cssday2-ass3.component';

describe('Cssday2Ass3Component', () => {
  let component: Cssday2Ass3Component;
  let fixture: ComponentFixture<Cssday2Ass3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssday2Ass3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cssday2Ass3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
