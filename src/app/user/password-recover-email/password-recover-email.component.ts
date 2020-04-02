import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SystemService } from 'app/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-recover-email',
  templateUrl: './password-recover-email.component.html',
  styleUrls: ['./password-recover-email.component.css']
})
export class PasswordRecoverEmailComponent implements OnInit {

  username:string = "";
  email:string = "";
  message:string = "";

  recover():void {
    this.usersvc.recoverPasswordEmail(this.username, this.email).subscribe(
      result => {
        console.log(result);
        if (result == null) {
          this.message = "Incorrect username and/or email address.";
        }
        else this.router.navigateByUrl(`/resetpassword/${result.id}`);
      },
      error => {
        console.error("Error trying to recover password!", error);
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
