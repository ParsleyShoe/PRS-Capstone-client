import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestLine } from './request-line.class';

const url:string = "http://localhost:5000/api/requestlines"; // use this when running server from Bash
const url2:string = "http://localhost:55555/api/requestlines"; // use this when running server from IIS in Visual Studio 2019

@Injectable({
  providedIn: 'root'
})
export class RequestLineService {
  list():Observable<RequestLine[]> {
    return this.http.get(`${url}`) as Observable<RequestLine[]>;
  };
  get(id:any):Observable<RequestLine> {
    return this.http.get(`${url}/${id}`) as Observable<RequestLine>;
  };
  create(requestline:RequestLine):Observable<RequestLine> {
    return this.http.post(`${url}`, requestline) as Observable<RequestLine>;
  };
  change(requestline:RequestLine):Observable<any> {
    return this.http.put(`${url}/${requestline.id}`, requestline) as Observable<any>;
  };
  remove(requestline:RequestLine):Observable<any> {
    return this.http.delete(`${url}/${requestline.id}`) as Observable<any>;
  };

  constructor(
    private http:HttpClient
  ) { }
}
