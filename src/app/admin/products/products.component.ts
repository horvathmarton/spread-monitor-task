import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../models/Product';
import { DataStructure } from '../../models/DataStructure';
import { ProductEditorDialogComponent } from './product-editor-dialog/product-editor-dialog.component';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  productsDataStructure: DataStructure = {
    name: 'products',
    data: [],
    schema: ['id', 'name', 'description'],
    editorDialog: ProductEditorDialogComponent
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
    this.productService.getProducts().subscribe((products) => {
        this.products = products;
        this.productsDataStructure.data = this.filterProducts(products);
      });

    this.router.events
      .subscribe(_ => this.productsDataStructure.data = this.filterProducts(this.products));
  }

}
