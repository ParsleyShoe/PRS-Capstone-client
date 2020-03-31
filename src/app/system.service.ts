import { Injectable } from '@angular/core';
import { User } from './user/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser:User = new User();

  logout():void {
    this.loggedInUser = new User();
    this.router.navigateByUrl("/login");
  }

  formatPhoneNumber(phone:string):string {
    if (phone == null || phone.length < 10) {
      return phone;
    }
    var cleaned = ("" + phone).replace(/\D/g, "");
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  };

  constructor(
    private router:Router
  ) { }
}
