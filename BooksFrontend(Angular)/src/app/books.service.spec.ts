import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { BooksService } from './books.service';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
describe('BooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule
    ],
    schemas:[
      CUSTOM_ELEMENTS_SCHEMA

    ]
  }));

  it('should be created', () => {
    const service: BooksService = TestBed.get(BooksService);
    expect(service).toBeTruthy();
  });
});
