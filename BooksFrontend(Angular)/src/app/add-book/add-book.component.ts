import { Component, OnInit, Inject } from '@angular/core';
import { Book } from '../books';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BooksService } from '../books.service';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';

//By: ShRuti Shah 
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  userSubscription;
  editId:number;
  showEdit:boolean=false;
  currentId:number;
  //making form group
  BookForm = new FormGroup({
    id_book: new FormControl(''),
    nameBook: new FormControl(''),
    nameAuthor: new FormControl('')
  })

  constructor(private booksService:BooksService,private router: Router,private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    
    //getting id from url parameter
    this.userSubscription = this.activatedRoute.params.subscribe(
      (params: Params) => {
        //if parameter exists
        if(params){
          console.log(params);
          this.editId=params['id'];
          console.log(this.editId);

          //if valid id exists
          if(this.editId){
          //calling search book service
          this.booksService.SearchBookById(this.editId).subscribe(book=>{
            this.currentId=book.id_book;  //current id before update
            this.BookForm.controls['id_book'].setValue(book.id_book);
            this.BookForm.controls['nameBook'].setValue(book.nameBook);
            this.BookForm.controls['nameAuthor'].setValue(book.nameAuthor);
          })
          //to display edit button
          this.showEdit=true;
        }

        }
        else{
          //to display submit button
          this.showEdit=false;
        }
    })
  }
  
  onAdd(){
    //calling post book service
    this.booksService.AddBook(this.BookForm.value).subscribe(booklist=>{
      alert("Book "+this.BookForm.controls['id_book'].value+ " is added!!");
      //navigate to home page
      this.router.navigate(['']);
    })
  }


  UpdateBook(){
    //calling update service
    if(confirm("Are you sure want to update book "+this.currentId)){
      this.booksService.UpdateBook(this.currentId,this.BookForm.value).subscribe(bookList=>{
        alert("Book "+this.currentId+" is updated");
        //navigate to home page
        this.router.navigate(['']);
      })
    }
  }
}
