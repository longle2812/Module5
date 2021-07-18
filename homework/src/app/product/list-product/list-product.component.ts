import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  @Input() products = [];
  @Output() isShowEdit = new EventEmitter<boolean>();
  @Output() productId = new EventEmitter<number>();
  @Input() showEdit = false;

  constructor() {
  }

  ngOnInit() {
  }

  showEditForm(id: number) {
    this.isShowEdit.emit(true);
    this.productId.emit(id);
  }

  deleteProduct(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products.splice(i, 1);
      }
    }
  }
}
