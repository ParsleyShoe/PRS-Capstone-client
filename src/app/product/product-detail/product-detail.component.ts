import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'app/system.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:Product = new Product();

  delete():void {
    this.productsvc.remove(this.product).subscribe(
      () => {
        this.router.navigateByUrl("/products/list");
      },
      error => {
        console.error("Error deleting product: ", error);
      }
    );
  };

  constructor(
    private productsvc:ProductService,
    private route:ActivatedRoute,
    private router:Router,
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
  }

}