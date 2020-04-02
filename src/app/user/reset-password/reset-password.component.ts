import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  userPassword:string = "";
  user:User = new User();

  reset():void {
    this.user.password = this.userPassword;
    this.usersvc.change(this.user).subscribe(
      () => {
        this.router.navigateByUrl("/login");
      },
      error => {
        console.error("Error resetting password: ", error);
      }
    );
  }

  constructor(
    private usersvc:UserService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {let id = this.route.snapshot.params.id; //reads url and binds value of id
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
