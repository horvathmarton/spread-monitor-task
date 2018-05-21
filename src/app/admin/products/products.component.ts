import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';

import {Product} from '../../models/Product';
import {DataStructure} from '../../models/DataStructure';

import { ProductService } from '../../services/product.service';
import { PaginationInfo } from '../../models/PaginationInfo';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
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
    private router: Router,
    private productService: ProductService
  ) { }

  filterProducts(products: Product[]): Product[] {
    const filterTerm = this.route.snapshot.queryParamMap.get('filter');
    if (!filterTerm) { return products; }
    return products.filter(p => p.name.includes(filterTerm) || p.description.includes(filterTerm));
  }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe((products) => {
        this.products = products;
        this.productsDataStructure.data = this.filterProducts(products);
      });

    this.router.events
      .subscribe(_ => this.productsDataStructure.data = this.filterProducts(this.products));
  }

}
