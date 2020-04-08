import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, InjectionToken } from '@angular/core';
import { BooksComponent } from './books.component';
import { MatButtonModule, MatIconModule, MatTableModule, MatDialog, MAT_DIALOG_SCROLL_STRATEGY, MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Overlay } from '@angular/cdk/overlay';
describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        MatDialogModule
      ],
      declarations: [ BooksComponent ],
      providers:[
        MatDialog,
        Overlay,
      ],
      schemas : [
        CUSTOM_ELEMENTS_SCHEMA,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
