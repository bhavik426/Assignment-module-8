import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssday2Ass4Component } from './cssday2-ass4.component';

describe('Cssday2Ass4Component', () => {
  let component: Cssday2Ass4Component;
  let fixture: ComponentFixture<Cssday2Ass4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssday2Ass4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cssday2Ass4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
