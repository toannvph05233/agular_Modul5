import {Injectable} from '@angular/core';
import {Books} from "./Books";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  book: BehaviorSubject<Books> = new BehaviorSubject<Books>(new Books('', '', ''));

  constructor() {
  }

  getBook() {
    return this.book;
  }

  setBook(book2: Books) {
    this.book.next(book2);
  }
}
