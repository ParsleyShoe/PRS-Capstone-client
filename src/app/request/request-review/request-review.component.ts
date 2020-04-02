import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {
  
  request:Request = new Request();
  isRejected:boolean = false;

  approve():void {
    this.requestsvc.approve(this.request).subscribe(
      () => {
        this.router.navigateByUrl("/requests/review/list");
      },
      error => {
        console.error("Error approving request: ", error);
      }
    );
  };

  reject():void {
    if (!this.request.rejectionReason) {
      this.isRejected = true;
    }
    else {
      this.requestsvc.reject(this.request).subscribe(
        () => {
          this.router.navigateByUrl("/requests/review/list");
        },
        error => {
          console.error("Error rejecting request: ", error);
        }
      );
    }
  };

  constructor(
    private requestsvc:RequestService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id; //reads url and binds value of id
    this.requestsvc.get(id).subscribe(
      result => {
        this.request = result;
        this.request.rejectionReason = "";
      },
      error => {
        console.error("Error loading the request: ", error);
      }
    );
  }

}