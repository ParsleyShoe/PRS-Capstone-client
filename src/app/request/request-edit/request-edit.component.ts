import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLineService } from 'app/request-line/request-line.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request:Request = new Request();

  save():void {
    this.request.userId = Number(this.request.userId);
    this.requestsvc.change(this.request).subscribe(
      () => {
        this.router.navigateByUrl("/requests/list");
      },
      error => {
        console.error("Error updating request: ", error);
      }
    );
  };

  delete(requestlineId:number):void {
    this.requestlinesvc.remove(requestlineId).subscribe(
      () => {
        this.refresh();
      },
      error => {
        console.error("Error deleting request line: ", error);
      }
    );
  };

  refresh():void {
    this.requestsvc.get(this.request.id).subscribe(
      result => {
        this.request = result;
      },
      error => {
        console.error("Error loading the request: ", error);
      }
    );
  }

  constructor(
    private requestsvc:RequestService,
    private route:ActivatedRoute,
    private router:Router,
    private requestlinesvc:RequestLineService
  ) { }

  ngOnInit(): void {
    this.request.id = this.route.snapshot.params.id;
    this.refresh();
  }

}