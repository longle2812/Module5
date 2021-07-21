import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordListComponent } from './dictionary/word-list/word-list.component';
import { WordDetailComponent } from './dictionary/word-detail/word-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WordListComponent,
    WordDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
