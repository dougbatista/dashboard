/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PeddiClientComponent } from './peddi-client.component';

describe('PeddiClientComponent', () => {
  let component: PeddiClientComponent;
  let fixture: ComponentFixture<PeddiClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeddiClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeddiClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
