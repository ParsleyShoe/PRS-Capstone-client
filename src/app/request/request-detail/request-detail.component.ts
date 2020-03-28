import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { RequestLine } from 'app/request-line/request-line.class';
import { RequestLineService } from 'app/request-line/request-line.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request:Request = new Request();
  requestlines:RequestLine[] = [];

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

  constructor(
    private requestsvc:RequestService,
    private route:ActivatedRoute,
    private router:Router,
    private requestlinesvc:RequestLineService
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
    this.requestlinesvc.list().subscribe(
      result => {
        let requestlines:RequestLine[] = [];
        for (let r of result) {
          if (r.requestId != this.request.id) {
            continue;
          }
          requestlines.push(r);
        }
        this.requestlines = requestlines;
      },
      error => {
        console.error("Error loading the request: ", error);
      }
    );
  }

}