import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  categories: Category[] = [];
  productName: string;
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    category: new FormControl(),
    description: new FormControl(),
  });


  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
        const id = paramMap.get('id');
        this.productService.getProductById(id).subscribe(
          product => {
            this.productName = product.name;
            this.productForm.setValue(product);
            this.productForm.patchValue({
              category: this.productForm.get('category').value.id
            });
          },
          e => console.log('Cannot find')
        );
      }
    );
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe(categories =>
      this.categories = categories
  );
  }

  edit() {
    const product = this.productForm.value;
    this.productService.updateProduct(product).subscribe(
      () => alert('thanh cong')
    );
  }
}
