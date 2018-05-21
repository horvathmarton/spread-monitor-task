import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule} from '@angular/forms';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductsComponent } from './admin/products/products.component';
import { UsersComponent } from './admin/users/users.component';
import { TableComponent } from './admin/table/table.component';
import { LoginComponent } from './admin/login/login.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { HeaderComponent } from './user/header/header.component';
import { CardComponent } from './user/card/card.component';

import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    UsersComponent,
    TableComponent,
    LoginComponent,
    UserListComponent,
    HeaderComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
