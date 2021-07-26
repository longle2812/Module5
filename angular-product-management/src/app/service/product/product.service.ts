import {Injectable} from '@angular/core';
import {Product} from '../../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_URL}/products`);
  }

  saveProduct(product: Product): Observable<Product> {
    product.category = {
        id: product.category
      };
    return this.http.post<Product>(`${API_URL}/products`, product);
  }

  getProductById(id): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/products/${id}`);
  }

  updateProduct(product: Product): Observable<Product> {
    product.category = {
      id: product.category
    };
    return this.http.put<Product>(`${API_URL}/products`, product);
  }

  deleteProduct(id): Observable<unknown> {
    return this.http.delete(`${API_URL}/products/${id}`);
  }
}
