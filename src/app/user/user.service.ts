import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

const url:string = "http://localhost:5000/api/users"; // use this when running server from Bash
const url2:string = "http://localhost:55555/api/users"; // use this when running server from IIS in Visual Studio 2019

@Injectable({
  providedIn: 'root'
})
export class UserService {
  list():Observable<User[]> {
    return this.http.get(`${url}`) as Observable<User[]>;
  };
  get(id:any):Observable<User> {
    return this.http.get(`${url}/${id}`) as Observable<User>;
  };
  create(user:User):Observable<User> {
    return this.http.post(`${url}`, user) as Observable<User>;
  };
  change(user:User):Observable<any> {
    return this.http.put(`${url}/${user.id}`, user) as Observable<any>;
  };
  remove(user:User):Observable<any> {
    return this.http.delete(`${url}/${user.id}`) as Observable<any>;
  };
  formatPhoneNumber(userPhone:string):string {
    if (userPhone == null || userPhone.length < 10) {
      return userPhone;
    }
    var cleaned = ("" + userPhone).replace(/\D/g, "");
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return userPhone;
  };

  login(username:string, password:string):Observable<User> {
    return this.http.get(`${url}/login/${username}/${password}`) as Observable<User>;
  };
  recoverPasswordEmail(username:string, email:string):Observable<boolean> {
    return this.http.get(`${url}/recoverpassword_e/${username}/${email}`) as Observable<boolean>;
  };
  recoverPasswordPhone(username:string, phone:string):Observable<boolean> {
    return this.http.get(`${url}/recoverpassword_e/${username}/${phone}`) as Observable<boolean>;
  };
  resetPassword(user:User, password:string):Observable<any> {
    return this.http.get(`${url}/resetpassword/${password}`) as Observable<any>;
  };



  constructor(
    private http:HttpClient
  ) { }
}
