import {Component, Input, OnInit} from '@angular/core';
import {Books} from "../Books";
import {HttpClient} from "@angular/common/http";
import {BookService} from "../book.service";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  books: Books;
  title: string;
  author: string;
  description: string;

  constructor(private http: HttpClient, private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getBook().subscribe(b => this.books = b);
    this.title = this.books.title;
    this.author = this.books.author;
    this.description = this.books.description;
  }

  getEditBook(book: Books) {
    this.books = {id: book.id, title: this.title, author: this.author, description: this.description};
    const url = 'http://localhost:3000/books/' + book.id;
    this.http.put(url, this.books).subscribe((resJson) => {
      alert('Edit thành công');
    }, error => {
      alert(error);
    });
  }
}
