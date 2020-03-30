import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'app/system.service';
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
        this.router.navigateByUrl(`/requests/edit/${this.request.id}`);
      },
      error => {
        console.error("Error deleting request line: ", error);
      }
    );
  };

  constructor(
    private requestsvc:RequestService,
    private route:ActivatedRoute,
    private router:Router,
    private syssvc:SystemService,
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
  }

}