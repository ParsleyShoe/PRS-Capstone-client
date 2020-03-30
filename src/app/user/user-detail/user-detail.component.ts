import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { SystemService } from 'app/system.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  
  user:User = new User();

  delete():void {
    this.usersvc.remove(this.user).subscribe(
      () => {
        this.router.navigateByUrl("/users/list");
      },
      error => {
        console.error("Error deleting user: ", error);
      }
    );
  };

  constructor(
    private usersvc:UserService,
    private route:ActivatedRoute,
    private router:Router,
    private syssvc:SystemService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id; //reads url and binds value of id
    this.usersvc.get(id).subscribe(
      result => {
        this.user = result;
        this.user.phone = this.syssvc.formatPhoneNumber(this.user.phone);
      },
      error => {
        console.error("Error loading the user: ", error);
      }
    );
  }

}
