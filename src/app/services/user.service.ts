import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
