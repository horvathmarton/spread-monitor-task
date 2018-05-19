import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
}
