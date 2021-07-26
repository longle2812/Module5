import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductDeleteComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
