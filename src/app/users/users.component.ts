import {Component, OnInit} from '@angular/core';

import {User} from '../models/User';
import {DataStructure} from '../models/DataStructure';

import {UserService} from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  usersDataStructure: DataStructure = {
    name: 'Users',
    data: [],
    schema: ['id', 'first_name', 'last_name', 'email']
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.usersDataStructure.data = users);
  }

}
