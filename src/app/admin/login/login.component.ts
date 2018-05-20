import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  constructor(private authService: AuthenticationService) { }

  onLogin(form: NgForm): void {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.login(email, password);
  }

  ngOnInit() {
  }

}
