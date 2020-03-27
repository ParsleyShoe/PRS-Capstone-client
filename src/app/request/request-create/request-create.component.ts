import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request:Request = new Request();

  save():void {
    this.requestsvc.create(this.request).subscribe(
      () => {
        this.router.navigateByUrl("/requests/list");
      },
      error => {
        console.error("Error creating request: ", error);
      }
    );
  };

  constructor(
    private requestsvc:RequestService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

}