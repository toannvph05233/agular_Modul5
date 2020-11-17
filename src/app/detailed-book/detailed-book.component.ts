import {Component, OnInit} from '@angular/core';
import {Books} from '../Books';
import {HttpClient} from '@angular/common/http';
import {BookService} from "../book.service";

@Component({
  selector: 'app-detailed-book',
  templateUrl: './detailed-book.component.html',
  styleUrls: ['./detailed-book.component.css']
})
export class DetailedBookComponent implements OnInit {
  books: Books;

  constructor(private http: HttpClient, private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.getBook().subscribe(b => this.books = b);
  }

}
