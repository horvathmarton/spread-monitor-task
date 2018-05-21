import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../models/User';
import { DataStructure } from '../../models/DataStructure';
import { UserEditorDialogComponent } from './user-editor-dialog/user-editor-dialog.component';

import { UserService } from '../../services/user.service';

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
    editorDialog: UserEditorDialogComponent,
    updateFunction: this.updateUser.bind(this)
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  updateUser(id: number, data: Object) {
    const user = this.users.find(u => u.id === id);
    user.first_name = data.first_name;
    user.last_name = data.last_name;
    user.email = data.email;
    user.username = data.username;
    this.userService.updateUser(user).subscribe();
  }

  private filterUsers(users: User[]): User[] {
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
