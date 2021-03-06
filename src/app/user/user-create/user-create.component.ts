import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { SystemService } from 'app/system.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user:User = new User();
  blankuser:User = new User();

  save():void {
    this.user.isReviewer = Boolean(this.user.isReviewer);
    this.user.isAdmin = Boolean(this.user.isAdmin);
    this.usersvc.create(this.user).subscribe(
      () => {
        if (this.syssvc.loggedInUser.id == 0) this.router.navigateByUrl("/login");
        else this.router.navigateByUrl("/users/list");
      },
      error => {
        console.error("Error creating user: ", error);
      }
    );
  };

  reset():void {
    this.user = this.blankuser;
    this.blankuser = new User();
  }

  constructor(
    private usersvc:UserService,
    private router:Router,
    public syssvc:SystemService
  ) { }

  ngOnInit(): void {
  }

}
