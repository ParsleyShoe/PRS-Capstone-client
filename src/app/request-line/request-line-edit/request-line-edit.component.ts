import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'app/system.service';
import { RequestLine } from '../request-line.class';
import { Product } from 'app/product/product.class';
import { RequestLineService } from '../request-line.service';

@Component({
  selector: 'app-request-line-edit',
  templateUrl: './request-line-edit.component.html',
  styleUrls: ['./request-line-edit.component.css']
})
export class RequestLineEditComponent implements OnInit {

  requestline:RequestLine = new RequestLine();
  products:Product[] = [];

  save():void {
    this.requestline.quantity = Number(this.requestline.quantity);
    this.requestline.productId = Number(this.requestline.productId);
    this.requestlinesvc.change(this.requestline).subscribe(
      () => {
        this.router.navigateByUrl(`requests/edit/${this.requestline.requestId}`);
      },
      error => {
        console.error("Error creating request line: ", error);
      }
    );
  };

  constructor(
    private syssvc:SystemService,
    private requestlinesvc:RequestLineService,
    private route:ActivatedRoute,
    private router:Router,
    private productsvc:ProductService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.requestlinesvc.get(id).subscribe(
      result => {
        this.requestline = result;
      },
      error => {
        console.error("Error getting request line: ", error);
      }
    );
    this.productsvc.list().subscribe(
      result => {
        this.products = result;
      },
      error => {
        console.error("Error getting list of products: ", error);
      }
    );
  }

}
