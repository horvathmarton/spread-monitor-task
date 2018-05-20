import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token: string;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  login(email: string, password: string): void {
    this.userService.getUsers()
      .subscribe(users => {
        if (users.find(user => user.email === email && user.password === password)) {
          this.token = 'I am a JWT!';
          return this.router.navigate(['/products']);
        }

        return this.router.navigate(['/login']);
      });
  }

  isAuthenticated() {
    if (this.token) {
      return !!(this.token);
    }
  }

  getToken(): string {
    return this.token;
  }

  logout(): void {
    this.token = undefined;
  }
}
