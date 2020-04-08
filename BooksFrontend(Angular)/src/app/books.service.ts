import { Injectable } from '@angular/core';
import { Book } from './books';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/books')
  }

  SearchBookById(id:number): Observable<Book> {
    return this.http.get<Book>('/api/books/'+id)
  }

  AddBook(book:Book):Observable<Book[]> {
    return this.http.post<Book[]>('/api/books/',book)
  }

  UpdateBook(id:number,book:Book):Observable<Book[]> {
    return this.http.put<Book[]>('/api/books/'+id,book)
  }

  DeleteBook(id:number):Observable<Book[]>{
    return this.http.delete<Book[]>('/api/books/'+id)
  }


}
