import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        const id = paramMap.get('id');
        this.productService.getProductById(id).subscribe(
          product => this.product = product
        );
      }
    );
  }

  ngOnInit() {
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe();
  }

}
