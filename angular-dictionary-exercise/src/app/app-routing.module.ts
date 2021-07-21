import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WordDetailComponent} from './dictionary/word-detail/word-detail.component';
import {WordListComponent} from './dictionary/word-list/word-list.component';


const routes: Routes = [
  {
    path: 'dictionary/list',
    component: WordListComponent,
    children: [
      {
        path: ':id',
        component: WordDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
