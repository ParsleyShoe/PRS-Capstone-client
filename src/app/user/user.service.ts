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

  login(username:string, password:string):Observable<User> {
    return this.http.get(`${url}/login/${username}/${password}`) as Observable<User>;
  };
  recoverPasswordEmail(username:string, email:string):Observable<User> {
    return this.http.get(`${url}/recoverpassword_e/${username}/${email}`) as Observable<User>;
  };
  recoverPasswordPhone(username:string, phone:string):Observable<boolean> {
    return this.http.get(`${url}/recoverpassword_e/${username}/${phone}`) as Observable<boolean>;
  };
  resetPassword(password:string, user:User):Observable<any> {
    return this.http.put(`${url}/resetpassword/${password}`, user) as Observable<any>;
  };



  constructor(
    private http:HttpClient
  ) { }
}
