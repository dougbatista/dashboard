/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GarcomComponent } from './garcom.component';

describe('GarcomComponent', () => {
  let component: GarcomComponent;
  let fixture: ComponentFixture<GarcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
