import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import {ProductDeleteComponent} from './product/product-delete/product-delete.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './helper/auth-guard';


const routes: Routes = [
  {
    path: 'product/list',
    canActivate: [AuthGuard],
    component: ProductListComponent
  },
  {
    path: 'product/create',
    component: ProductCreateComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'product/delete/:id',
    component: ProductDeleteComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
