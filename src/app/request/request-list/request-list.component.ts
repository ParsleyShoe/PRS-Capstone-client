import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { SystemService } from 'app/system.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  
  requests:Request[] = [];
  searchCriteria:string = "";
  sortBy:string = "";
  asc:boolean = true;

  sort(sortParam:string):void {
    if (this.sortBy != sortParam) this.asc = true;
    else this.asc = this.asc ? false : true;
    this.sortBy = sortParam;
  };

  constructor(
    private requestsvc:RequestService,
    public syssvc:SystemService
  ) { }

  ngOnInit(): void {
    this.requestsvc.list().subscribe(
      result => {
        this.requests = result;
      },
      error => {
        console.error("Error retrieving requests: ", error);
      }
    );
  }
}