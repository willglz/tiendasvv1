import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clients2Component } from './clients2.component';

describe('Clients2Component', () => {
  let component: Clients2Component;
  let fixture: ComponentFixture<Clients2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clients2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clients2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
