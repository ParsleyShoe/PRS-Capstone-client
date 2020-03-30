import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'app/system.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor:Vendor = new Vendor();

  save():void {
    this.vendorsvc.change(this.vendor).subscribe(
      () => {
        this.router.navigateByUrl("/vendors/list");
      },
      error => {
        console.error("Error updating vendor: ", error);
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
      },
      error => {
        console.error("Error loading the vendor: ", error);
      }
    );
  }

}
