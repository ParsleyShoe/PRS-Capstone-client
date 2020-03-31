import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { SystemService } from 'app/system.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request:Request = new Request();

  delete():void {
    this.requestsvc.remove(this.request).subscribe(
      () => {
        this.router.navigateByUrl("/requests/list");
      },
      error => {
        console.error("Error deleting request: ", error);
      }
    );
  };

  review():void {
    this.requestsvc.review(this.request).subscribe(
      () => {
        this.router.navigateByUrl("/requests/list");
      },
      error => {
        console.error("Error deleting request: ", error);
      }
    );
  };

  constructor(
    private requestsvc:RequestService,
    private route:ActivatedRoute,
    private router:Router,
    private syssvc:SystemService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id; //reads url and binds value of id
    this.requestsvc.get(id).subscribe(
      result => {
        this.request = result;
      },
      error => {
        console.error("Error loading the request: ", error);
      }
    );
  }

}