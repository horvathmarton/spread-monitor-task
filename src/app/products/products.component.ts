import { Component, OnInit } from '@angular/core';

import {Product} from '../models/Product';
import {DataStructure} from '../models/DataStructure';

import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  productsDataStructure: DataStructure = {
    name: 'Products',
    data: [],
    schema: ['id', 'name', 'description']
  };

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(products => this.productsDataStructure.data = products);
  }

}
