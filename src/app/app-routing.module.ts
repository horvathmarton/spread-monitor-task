import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProductsComponent} from './admin/products/products.component';
import {UsersComponent} from './admin/users/users.component';
import {LoginComponent} from './admin/login/login.component';
import {UserListComponent} from './user/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: UserListComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
