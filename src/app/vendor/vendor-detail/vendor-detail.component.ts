import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { SystemService } from 'app/system.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor:Vendor = new Vendor();

  delete():void {
    this.vendorsvc.remove(this.vendor).subscribe(
      () => {
        this.router.navigateByUrl("/vendors/list");
      },
      error => {
        console.error("Error deleting vendor: ", error);
      }
    );
  };

  constructor(
    private vendorsvc:VendorService,
    private route:ActivatedRoute,
    private router:Router,
    private syssvc:SystemService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id; //reads url and binds value of id
    this.vendorsvc.get(id).subscribe(
      result => {
        this.vendor = result;
        this.vendor.phone = this.syssvc.formatPhoneNumber(this.vendor.phone);
      },
      error => {
        console.error("Error loading the vendor: ", error);
      }
    );
  }

}
