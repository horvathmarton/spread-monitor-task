import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './admin/products/products.component';
import { UsersComponent } from './admin/users/users.component';

import {InMemoryDataService} from './services/in-memory-data.service';

import { MaterialModule } from './material.module';
import { TableComponent } from './admin/table/table.component';
import { LoginComponent } from './admin/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UsersComponent,
    TableComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MaterialModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: Math.floor(Math.random() * 500) + 100 }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
