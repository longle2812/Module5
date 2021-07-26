import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getAll().subscribe(
      products => {
        this.products = products;
      },
      e => console.log('Error')
    );
  }

}
