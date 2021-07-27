import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../service/category/category.service';
import {Category} from '../../model/category';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  categories: Category[] = [];
  productName: string;
  selectedImage = null;
  imgSrc = '';
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    category: new FormControl(),
    imgURL: new FormControl(),
    description: new FormControl(),
  });


  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService,
              private storage: AngularFireStorage) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
        const id = paramMap.get('id');
        this.productService.getProductById(id).subscribe(
          product => {
            this.productName = product.name;
            this.productForm.setValue(product);
            this.productForm.patchValue({
              category: this.productForm.get('category').value.id
            });
            this.imgSrc = this.productForm.get('imgURL').value;
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
    product.imgURL = this.imgSrc;
    this.productService.updateProduct(product).subscribe(
      () => alert('thanh cong')
    );
  }

  showPreview(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = event.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      this.uploadFile();
    } else {
      this.selectedImage = null;
    }
  }

  uploadFile() {
    if (this.selectedImage != null) {
      const filePath = `${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            console.log(url);
            this.imgSrc = url;
          });
        })).subscribe();
    }
  }
}
