export class Books {
  id: number;
  title: string;
  author: string;
  description: string;

  constructor(title, author, description) {
    this.title = title;
    this.author = author;
    this.description = description;
  }
}
