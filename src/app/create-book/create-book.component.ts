import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Books} from '../Books';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  books: Books;
  id: number;
  title: string;
  author: string;
  description: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  createBook() {
    this.books = {id: this.id, title: this.title, author: this.author, description: this.description};
    const url = 'http://localhost:3000/books';
    this.http.post(url, this.books).subscribe((resJson) => {
      alert('create thành công');
    }, error => {
      alert('create lỗi');
    });
  }
}
