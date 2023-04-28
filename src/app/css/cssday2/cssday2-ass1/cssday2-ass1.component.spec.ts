import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssday2Ass1Component } from './cssday2-ass1.component';

describe('Cssday2Ass1Component', () => {
  let component: Cssday2Ass1Component;
  let fixture: ComponentFixture<Cssday2Ass1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssday2Ass1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cssday2Ass1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
