import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule} from '@angular/forms';
import {BookService} from '../../service/book/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  submit() {
    const book = this.bookForm.value;
    this.bookService.saveBook(book).subscribe(() => alert('Saved'));
    this.bookForm.reset();
  }
}
