import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedseatsPage } from './bookedseats.page';

describe('BookedseatsPage', () => {
  let component: BookedseatsPage;
  let fixture: ComponentFixture<BookedseatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedseatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedseatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
