import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {DataStructure} from '../../models/DataStructure';
import {PaginationInfo} from '../../models/PaginationInfo';

import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersDataStructure: DataStructure = {
    name: 'users',
    data: [],
    schema: ['id', 'first_name', 'last_name', 'email']
  };

  usersPaginationInfo: PaginationInfo = {
    limit: +this.route.snapshot.queryParamMap.get('limit') || 10,
    offset: +this.route.snapshot.queryParamMap.get('offset') || 0
  };

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.usersDataStructure.data = users);
  }

}
