import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book/book.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../model/books';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: Book;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        const id = paramMap.get('id');
        this.bookService.getBookById(id).subscribe(
          book => this.book = book
        );
      }
    );
  }

  ngOnInit() {
  }

  deleteProduct(id) {
    this.bookService.deleteBook(id).subscribe(
      () => alert('Delete Compeleted')
    );
  }

}
