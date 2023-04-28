import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssday2Ass2Component } from './cssday2-ass2.component';

describe('Cssday2Ass2Component', () => {
  let component: Cssday2Ass2Component;
  let fixture: ComponentFixture<Cssday2Ass2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssday2Ass2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cssday2Ass2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
