import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddBookComponent } from './add-book.component';
import { MatButtonModule, MatIconModule, MatTableModule, MatFormField, MatFooterCell, MatTableDataSource, MatColumnDef, MatHeaderCell } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [ AddBookComponent ],
      schemas : [
        CUSTOM_ELEMENTS_SCHEMA,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
