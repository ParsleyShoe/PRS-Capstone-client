import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';
import { SystemService } from 'app/system.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  
  vendors:Vendor[] = [];
  searchCriteria:string = "";
  sortBy:string = "";
  asc:boolean = true;

  sort(sortParam:string):void {
    if (this.sortBy != sortParam) this.asc = true;
    else this.asc = this.asc ? false : true;
    this.sortBy = sortParam;
  };

  constructor(
    private vendorsvc:VendorService,
    public syssvc:SystemService
  ) { }

  ngOnInit(): void {
    this.vendorsvc.list().subscribe(
      result => {
        this.vendors = result;
        for (let v of this.vendors) {
          v.phone = this.syssvc.formatPhoneNumber(v.phone);
        }
      },
      error => {
        console.error("Error retrieving vendors: ", error);
      }
    );
  }
}
