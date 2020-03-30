import { Component, OnInit } from '@angular/core';
import { SystemService } from 'app/system.service';
import { RequestLineService } from '../request-line.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLine } from '../request-line.class';
import { ProductService } from 'app/product/product.service';
import { Product } from 'app/product/product.class';

@Component({
  selector: 'app-request-line-create',
  templateUrl: './request-line-create.component.html',
  styleUrls: ['./request-line-create.component.css']
})
export class RequestLineCreateComponent implements OnInit {

  requestline:RequestLine = new RequestLine();
  products:Product[] = [];

  save():void {
    this.requestline.quantity = Number(this.requestline.quantity);
    this.requestline.requestId = Number(this.requestline.requestId);
    this.requestline.productId = Number(this.requestline.productId);
    this.requestlinesvc.create(this.requestline).subscribe(
      result => {
        this.requestline = result;
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
    this.requestline.requestId = this.route.snapshot.params.requestid;
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
