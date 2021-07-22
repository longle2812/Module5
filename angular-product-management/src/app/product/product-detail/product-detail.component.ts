import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });


  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
        const id = paramMap.get('id');
        this.productService.getProductById(id).subscribe(
          product => this.productForm.setValue(product),
          e => console.log('Cannot find')
        );
      }
    );
  }

  ngOnInit() {

  }

  edit() {
    const product = this.productForm.value;
    this.productService.updateProduct(product).subscribe(
      () => alert('thanh cong')
    );
  }
}
