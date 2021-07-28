import {Injectable} from '@angular/core';
import {Book} from '../../model/books';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${API_URL}/books`);
  }

  saveBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${API_URL}/books`, book);
  }

  getBookById(id): Observable<Book> {
    return this.http.get<Book>(`${API_URL}/books/${id}`);
  }

  updateBook(book: Book, id: string): Observable<Book> {
    return this.http.put<Book>(`${API_URL}/books/${id}`, book);
  }

  deleteBook(id): Observable<unknown> {
    return this.http.delete(`${API_URL}/books/${id}`);
  }
}
