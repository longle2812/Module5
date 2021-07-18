import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @Input() editProduct?: Product;
  @Output() closeEdit = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  closeEditForm() {
    this.closeEdit.emit(false);
  }
}
