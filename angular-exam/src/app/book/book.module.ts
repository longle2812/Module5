import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookListComponent} from './book-list/book-list.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookRoutingModule} from './book-routing.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    BookListComponent,
    BookCreateComponent,
    BookDeleteComponent,
    BookDetailComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookModule { }
