import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user.class';
import { SystemService } from 'app/system.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user:User = new User();
  password:string = "#temp-password#";

  save():void {
    this.user.isReviewer = Boolean(this.user.isReviewer);
    this.user.isAdmin = Boolean(this.user.isAdmin);
    this.usersvc.change(this.user).subscribe(
      () => {
        console.log("User updated.");
        console.log(this.user);
        this.router.navigateByUrl("/users/list");
      },
      error => {
        console.error("Error updating user: ", error);
      }
    );
  };

  resetPassword():void {
    this.user.password = this.password;
    console.log(this.user);
  }

  constructor(
    private usersvc:UserService,
    private router:Router,
    private route:ActivatedRoute,
    private syssvc:SystemService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id; //reads url and binds value of id
    this.usersvc.get(id).subscribe(
      result => {
        this.user = result;
      },
      error => {
        console.error("Error loading the user: ", error);
      }
    );
  }

}
