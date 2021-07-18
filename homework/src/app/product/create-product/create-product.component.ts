import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../product';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: Product;
  @Input() products: Product[] = [];
  @Output() addNewProduct = new EventEmitter<Product[]>();
  @Output() closeCreate = new EventEmitter<boolean>();

  constructor() {
  }

  onSubmit(f: NgForm) {
    this.products.push(f.value);
    this.addNewProduct.emit(this.products);
  }

  ngOnInit() {
  }

  closeCreateForm() {
    this.closeCreate.emit(false);
  }

}
