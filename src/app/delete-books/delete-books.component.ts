import {Component, OnInit} from '@angular/core';
import {Books} from "../Books";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-delete-books',
  templateUrl: './delete-books.component.html',
  styleUrls: ['./delete-books.component.css']
})
export class DeleteBooksComponent implements OnInit {
  books: Books;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  deleteBook(id) {
    const url = 'http://localhost:3000/books' + id;
    this.http.delete(url).subscribe((resJson) => {
      alert('create thành công');
    }, error => {
      alert('create lỗi');
    });
  }

  getBook(id) {
    const url = 'http://localhost:3000/books' + id;
    this.http.get<Books>(url).subscribe((resJson) => {
      this.books = resJson;
    });
  }
}
