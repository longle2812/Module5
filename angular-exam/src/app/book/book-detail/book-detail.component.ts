import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book/book.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  bookTitle: string;
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
        const id = paramMap.get('id');
        this.bookService.getBookById(id).subscribe(
          book => {
            this.bookTitle = book.title;
            this.bookForm.setValue(book);
          },
          e => console.log('Cannot find')
        );
      }
    );
  }

  ngOnInit() {

  }

  edit() {
    const book = this.bookForm.value;
    this.bookService.updateBook(book, book.id).subscribe(
      () => {
        alert('thanh cong');
        this.router.navigateByUrl('/books/list');
      }
    );
  }
}
