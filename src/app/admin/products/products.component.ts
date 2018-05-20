import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {DataStructure} from '../../models/DataStructure';

import { ProductService } from '../../services/product.service';
import {PaginationInfo} from '../../models/PaginationInfo';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsDataStructure: DataStructure = {
    name: 'products',
    data: [],
    schema: ['id', 'name', 'description'],
  };

  productsPaginationInfo: PaginationInfo = {
    limit: +this.route.snapshot.queryParamMap.get('limit') || 10,
    offset: +this.route.snapshot.queryParamMap.get('offset') || 0
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe((products) => {
        this.productsDataStructure.data = products;
      });
  }

}
