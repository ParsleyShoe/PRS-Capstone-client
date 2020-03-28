import { Component, OnInit } from '@angular/core';
import { RequestLineService } from '../request-line.service';
import { RequestLine } from '../request-line.class';

@Component({
  selector: 'app-request-line-list',
  templateUrl: './request-line-list.component.html',
  styleUrls: ['./request-line-list.component.css']
})
export class RequestLineListComponent implements OnInit {
  
  requestlines:RequestLine[] = [];
  searchCriteria:string = "";
  sortBy:string = "";
  asc:boolean = true;

  sort(sortParam:string):void {
    if (this.sortBy != sortParam) this.asc = true;
    else this.asc = this.asc ? false : true;
    this.sortBy = sortParam;
  };

  constructor(
    private requestlinesvc:RequestLineService
  ) { }

  ngOnInit(): void {
    this.requestlinesvc.list().subscribe(
      result => {
        this.requestlines = result;
      },
      error => {
        console.error("Error retrieving request lines: ", error);
      }
    );
  }
}