import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssday2Component } from './cssday2.component';

describe('Cssday2Component', () => {
  let component: Cssday2Component;
  let fixture: ComponentFixture<Cssday2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssday2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cssday2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
