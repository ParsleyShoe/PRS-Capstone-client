import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Vendor } from 'app/vendor/vendor.class';
import { VendorService } from 'app/vendor/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product:Product = new Product();
  blankproduct:Product = new Product();
  vendors:Vendor[] = [];

  save():void {
    this.product.vendorId = Number(this.product.vendorId);
    this.product.price = Number(this.product.price);
    this.productsvc.create(this.product).subscribe(
      () => {
        this.router.navigateByUrl("/products/list");
      },
      error => {
        console.error("Error creating product: ", error);
      }
    );
  };

  reset():void {
    this.product = this.blankproduct;
    this.blankproduct = new Product();
  }

  constructor(
    private productsvc:ProductService,
    private router:Router,
    private vendorsvc:VendorService
  ) { }

  ngOnInit(): void {
    this.vendorsvc.list().subscribe(
      result => {
        this.vendors = result;
      },
      error => {
        console.error("Error loading vendors: ", error);
      }
    );
  }

}