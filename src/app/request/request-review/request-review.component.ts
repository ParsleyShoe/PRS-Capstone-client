import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { User } from 'app/user/user.class';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'app/system.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {
  
  requests:Request[] = [];
  sortBy:string = "";
  asc:boolean = true;
  user:User = new User();

  sort(sortParam:string):void {
    if (this.sortBy != sortParam) this.asc = true;
    else this.asc = this.asc ? false : true;
    this.sortBy = sortParam;
  };

  constructor(
    private requestsvc:RequestService,
    private route:ActivatedRoute,
    private syssvc:SystemService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id; //reads url and binds value of id
    this.requestsvc.reviewlist(id).subscribe(
      result => {
        this.requests = result;
      },
      error => {
        console.error("Error retrieving requests: ", error);
      }
    );
  }
}