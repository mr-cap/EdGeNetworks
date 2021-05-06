import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../Users';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}
    url = 'http://localhost:3000/States';

    // tslint:disable-next-line: typedef
    getUsers(){
      return this.http.get<Users[]>(this.url);
  }
}
