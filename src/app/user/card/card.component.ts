import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() user;
  profileIconColor: number;

  constructor() { }

  ngOnInit() {
    this.profileIconColor = Math.floor(Math.random() * 4);
  }

}
