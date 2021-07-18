import {Component} from '@angular/core';
import {Product} from './product/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework';
  showCreate = false;
  showEdit = false;
  editProduct?: Product;
  products: Product[] = [{
    id: 1,
    name: 'Banana',
    price: 200,
    description: 'New'
  },
    {
      id: 2,
      name: 'Apple',
      price: 500,
      description: 'Old'
    }];

  showCreateForm() {
    this.showCreate = !this.showCreate;
  }

  addProduct(event) {
    this.products = event;
  }

  showEditForm(event) {
    this.showEdit = true;
  }

  getEditProduct(event) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === event) {
        this.editProduct = this.products[i];
      }
    }
  }

  closeEditForm(event) {
    this.showEdit = event;
  }

  closeCreateForm(event) {
    this.showCreate = event;
  }


}
