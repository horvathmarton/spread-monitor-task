import { Component, OnInit } from '@angular/core';

import {Product} from '../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'description'];

  constructor() { }

  ngOnInit() {
    this.products = [
      { id: 1, name: 'lorem', description: 'lorem ipsum' },
      { id: 2, name: 'valami', description: 'valami mas' }
    ];
  }

}
