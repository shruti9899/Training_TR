import { Component, OnInit ,ViewChild} from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../books';
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogConfig} from "@angular/material";

//By: ShRuti Shah 
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:MatTableDataSource<any>;
  search_book;
  displayedColumns:string[] = ['id_book','nameBook','nameAuthor','actions'];
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  searchkey:string;
  constructor(private booksService:BooksService,private dialog:MatDialog) {
   }

  ngOnInit() {
    this.DisplayBook();
  }

  DisplayBook(){
      //calling get all books service
      this.booksService.getAllBooks().subscribe(booklist=>{
        this.books=new MatTableDataSource(booklist);
        console.log(this.books);
        this.books.sort = this.sort;
        this.books.paginator=this.paginator;
      })
     
  }

  DeleteBook(id:number){
    //calling delete book service
    if(confirm("Are you sure want to delete book"+id)){
    this.booksService.DeleteBook(id).subscribe(booklist=>{
      console.log(booklist);
      alert("Book"+id+" deleted!!");
      window.location.reload();
    })
    }
  }
  
  //on pressing cross button of search bar
  onSearchClear(){
    this.searchkey="";
    this.applyfilter();
  }

  //getting search key and filtering table
  applyfilter(){
    this.books.filter = this.searchkey.trim().toLowerCase();
  }
}
