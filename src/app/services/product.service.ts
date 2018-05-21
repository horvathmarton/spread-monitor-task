import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  updateProduct (product: Product): Observable<any> {
    return this.http.put(this.productUrl, product, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
