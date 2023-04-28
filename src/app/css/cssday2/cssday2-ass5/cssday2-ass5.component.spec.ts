import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cssday2Ass5Component } from './cssday2-ass5.component';

describe('Cssday2Ass5Component', () => {
  let component: Cssday2Ass5Component;
  let fixture: ComponentFixture<Cssday2Ass5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cssday2Ass5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cssday2Ass5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
