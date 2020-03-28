import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from './request.class';
import { User } from 'app/user/user.class';

const url:string = "http://localhost:5000/api/requests"; // use this when running server from Bash
const url2:string = "http://localhost:55555/api/requests"; // use this when running server from IIS in Visual Studio 2019

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  reviewlist(id:any):Observable<Request[]> {
    return this.http.get(`${url}/reviews/${id}`) as Observable<Request[]>;
  };
  review(request:Request):Observable<any> {
    return this.http.put(`${url}/review/${request.id}`, request) as Observable<any>;
  };
  approve(request:Request):Observable<any> {
    return this.http.put(`${url}/approve/${request.id}`, request) as Observable<any>;
  };
  reject(request:Request):Observable<any> {
    return this.http.put(`${url}/reject/${request.id}`, request) as Observable<any>;
  };

  list():Observable<Request[]> {
    return this.http.get(`${url}`) as Observable<Request[]>;
  };
  get(id:any):Observable<Request> {
    return this.http.get(`${url}/${id}`) as Observable<Request>;
  };
  create(request:Request):Observable<Request> {
    return this.http.post(`${url}`, request) as Observable<Request>;
  };
  change(request:Request):Observable<any> {
    return this.http.put(`${url}/${request.id}`, request) as Observable<any>;
  };
  remove(request:Request):Observable<any> {
    return this.http.delete(`${url}/${request.id}`) as Observable<any>;
  };

  constructor(
    private http:HttpClient
  ) { }
}
