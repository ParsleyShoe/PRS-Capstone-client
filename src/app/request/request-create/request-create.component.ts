import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from 'app/system.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request:Request = new Request();

  save():void {
    this.requestsvc.create(this.request).subscribe(
      result => {
        this.request = result;
        this.router.navigateByUrl(`/requestlines/create/${this.request.id}`);
      },
      error => {
        console.error("Error creating request: ", error);
      }
    );
  };

  constructor(
    private requestsvc:RequestService,
    private router:Router,
    private syssvc:SystemService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.request.userId = Number(this.route.snapshot.params.userid);
  }

}