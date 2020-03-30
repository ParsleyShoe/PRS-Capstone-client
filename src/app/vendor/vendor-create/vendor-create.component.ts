import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { SystemService } from 'app/system.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor:Vendor = new Vendor();
  blankvendor:Vendor = new Vendor();

  save():void {
    this.vendorsvc.create(this.vendor).subscribe(
      () => {
        this.router.navigateByUrl("/vendors/list");
      },
      error => {
        console.error("Error creating vendor: ", error);
      }
    );
  };

  reset():void {
    this.vendor = this.blankvendor;
    this.blankvendor = new Vendor();
  }

  constructor(
    private vendorsvc:VendorService,
    private router:Router,
    private syssvc:SystemService
  ) { }

  ngOnInit(): void {
  }

}
