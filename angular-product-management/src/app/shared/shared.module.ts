import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {BrowserModule} from "@angular/platform-browser";
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  exports: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
  ]
})
export class SharedModule { }
