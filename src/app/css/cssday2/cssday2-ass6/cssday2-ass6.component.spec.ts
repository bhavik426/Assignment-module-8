import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssday2Ass6Component } from './cssday2-ass6.component';

describe('Cssday2Ass6Component', () => {
  let component: Cssday2Ass6Component;
  let fixture: ComponentFixture<Cssday2Ass6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssday2Ass6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cssday2Ass6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
