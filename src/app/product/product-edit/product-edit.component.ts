import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { Vendor } from 'app/vendor/vendor.class';
import { VendorService } from 'app/vendor/vendor.service';
import { SystemService } from 'app/system.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product:Product = new Product();
  vendors:Vendor[] = [];

  save():void {
    this.product.vendorId = Number(this.product.vendorId);
    this.product.price = Number(this.product.price);
    this.productsvc.change(this.product).subscribe(
      () => {
        this.router.navigateByUrl("/products/list");
      },
      error => {
        console.error("Error updating product: ", error);
      }
    );
  };

  constructor(
    private productsvc:ProductService,
    private route:ActivatedRoute,
    private router:Router,
    private vendorsvc:VendorService,
    private syssvc:SystemService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id; //reads url and binds value of id
    this.productsvc.get(id).subscribe(
      result => {
        this.product = result;
      },
      error => {
        console.error("Error loading the product: ", error);
      }
    );
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