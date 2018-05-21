import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {User} from '../../models/User';
import { DataStructure } from '../../models/DataStructure';

import { UserService } from '../../services/user.service';
import {UserEditorDialogComponent} from './user-editor-dialog/user-editor-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  usersDataStructure: DataStructure = {
    name: 'users',
    data: [],
    schema: ['id', 'first_name', 'last_name', 'email', 'username'],
    editorDialog: UserEditorDialogComponent
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  filterUsers(users: User[]): User[] {
    const filterTerm = this.route.snapshot.queryParamMap.get('filter');
    if (!filterTerm) { return users; }
    return users.filter((u) => {
      return u.first_name.includes(filterTerm) || u.last_name.includes(filterTerm) || u.email.includes(filterTerm)
        || u.username.includes(filterTerm);
    });
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
        this.users = users;
        this.usersDataStructure.data = this.filterUsers(users);
      });

    this.router.events
      .subscribe(_ => this.usersDataStructure.data = this.filterUsers(this.users));
  }

}
