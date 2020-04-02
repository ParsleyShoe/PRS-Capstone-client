import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from '../vendor.service';
import { RequestLine } from 'app/request-line/request-line.class';

@Component({
  selector: 'app-vendor-po',
  templateUrl: './vendor-po.component.html',
  styleUrls: ['./vendor-po.component.css']
})
export class VendorPoComponent implements OnInit {

  requestLines:RequestLine[] = [];
  vendorName:string;
  grandTotal:number = 0;

  constructor(
    private route:ActivatedRoute,
    private vendorsvc:VendorService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.vendorsvc.getPO(id).subscribe(
      result => {
        this.requestLines = result;
        for (let r of this.requestLines) {
          this.grandTotal += (r.product.price * 0.7) * r.quantity;
        }
      },
      error => {
        console.error("Error getting request lines: ", error);
      }
    );
    this.vendorsvc.get(id).subscribe(
      result => {
        this.vendorName = result.name;
      },
      error => {
        console.error("Error getting request lines: ", error);
      }
    );
  }

}
