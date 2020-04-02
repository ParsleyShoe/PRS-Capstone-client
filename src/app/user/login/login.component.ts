import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SystemService } from 'app/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";
  message:string = "";

  login():void {
    this.usersvc.login(this.username, this.password).subscribe(
      result => {
        if (result == null) {
          this.message = "Incorrect username and/or password.";
        }
        else {
          this.syssvc.loggedInUser = result;
          this.router.navigateByUrl("/requests/list");
        }
      },
      error => {
        console.error("Error logging in!", error);
      }
    );
  }

  constructor(
    private usersvc:UserService,
    public syssvc:SystemService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

}
