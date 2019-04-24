import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookticketsPage } from './booktickets.page';

describe('BookticketsPage', () => {
  let component: BookticketsPage;
  let fixture: ComponentFixture<BookticketsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookticketsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookticketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
