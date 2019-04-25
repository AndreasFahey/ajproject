import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbookingsPage } from './editbookings.page';

describe('EditbookingsPage', () => {
  let component: EditbookingsPage;
  let fixture: ComponentFixture<EditbookingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbookingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbookingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
