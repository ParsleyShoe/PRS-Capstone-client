import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user:User = new User();

  save():void {
    this.user.isReviewer = Boolean(this.user.isReviewer);
    this.user.isAdmin = Boolean(this.user.isAdmin);
    this.usersvc.create(this.user).subscribe(
      () => {
        this.router.navigateByUrl("/users/list");
      },
      err => {
        console.error("Error creating user: ", err);
      }
    );
  };

  constructor(
    private usersvc:UserService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

}
