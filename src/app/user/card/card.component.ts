import { Component, OnInit } from '@angular/core';

import {User} from '../../models/User';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  user: User = {
    id: 1,
    first_name: 'Marton',
    last_name: 'Horvath',
    email: 'hello@bello.com',
    password: 'asdf',
    username: 'mhorvath',
    tasks: 34,
    alert: true
  };

  constructor() { }

  ngOnInit() {
  }

}
