import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Product } from '@prisma/client';

@Component({
  selector: 'shirt-shop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public $products: Observable<Product[]>;

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.$products = this.productService.getProducts();
  }
}
