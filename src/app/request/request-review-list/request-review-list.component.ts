import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { SystemService } from 'app/system.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {
  
  requests:Request[] = [];
  orders:boolean = false;
  sortBy:string = "";
  asc:boolean = true;

  sort(sortParam:string):void {
    if (this.sortBy != sortParam) this.asc = true;
    else this.asc = this.asc ? false : true;
    this.sortBy = sortParam;
  };

  constructor(
    private requestsvc:RequestService,
    private syssvc:SystemService
  ) { }

  ngOnInit(): void {
    this.requestsvc.reviewlist(this.syssvc.loggedInUser.id).subscribe(
      result => {
        this.requests = result;
        if (this.requests.length > 0 ) this.orders = true;
      },
      error => {
        console.error("Error retrieving requests: ", error);
      }
    );
  }
}