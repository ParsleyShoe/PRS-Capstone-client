import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:User[] = [];
  searchCriteria:string = "";

  constructor(
    private usersvc:UserService
  ) { }

  ngOnInit(): void {
    this.usersvc.list().subscribe(
      result => {
        this.users = result;
        for (let u of this.users) {
          u.phone = this.usersvc.formatPhoneNumber(u.phone);
        }
      },
      error => {
        console.error("Error retrieving users: ", error);
      }
    );
  }

}
