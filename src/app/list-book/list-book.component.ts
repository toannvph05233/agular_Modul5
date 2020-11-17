import {Component, OnInit} from '@angular/core';
import {Books} from '../Books';
import {HttpClient} from '@angular/common/http';
import {Router, Routes} from "@angular/router";
import {BookService} from "../book.service";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  books2: Books;
  ListBooks: Books[];

  constructor(private http: HttpClient, private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getAllBook();
  }

  getAllBook() {
    const url = 'http://localhost:3000/books';
    this.http.get<Books[]>(url).subscribe((resJson) => {
      this.ListBooks = resJson;
    });
  }

  getEdit(book: Books) {
    this.bookService.setBook(book);
  }

  deleteBook(books: Books) {
    if (confirm('Bạn muốn xóa chứ')) {
      const url = 'http://localhost:3000/books/' + books.id;
      this.http.delete(url).subscribe((resJson) => {
        alert('delete thành công');
        this.getAllBook();
      }, error => {
        alert('delete lỗi');
      });
    }
  }
}
