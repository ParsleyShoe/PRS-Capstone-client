import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { SystemService } from 'app/system.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products:Product[] = [];
  searchCriteria:string = "";
  sortBy:string = "";
  asc:boolean = true;

  sort(sortParam:string):void {
    if (this.sortBy != sortParam) this.asc = true;
    else this.asc = this.asc ? false : true;
    this.sortBy = sortParam;
  };

  constructor(
    private productsvc:ProductService,
    public syssvc:SystemService
  ) { }

  ngOnInit(): void {
    this.productsvc.list().subscribe(
      result => {
        this.products = result;
      },
      error => {
        console.error("Error retrieving products: ", error);
      }
    );
  }
}