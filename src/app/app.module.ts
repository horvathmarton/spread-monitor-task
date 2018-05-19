import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UsersComponent,
    MaterialModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
