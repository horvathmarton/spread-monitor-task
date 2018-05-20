import { Component, OnInit, Input } from '@angular/core';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() dataStructure;
  @Input() paginationInfo;

  firstEntryIndex: number;
  lastEntryIndex: number;

  constructor() { }

  onPagination(event: PageEvent) {
    this.firstEntryIndex = event.pageIndex * event.pageSize;
    this.lastEntryIndex = this.firstEntryIndex + event.pageSize;
  }

  ngOnInit() {
    this.firstEntryIndex = this.paginationInfo.offset;
    this.lastEntryIndex = this.paginationInfo.offset + this.paginationInfo.limit;
  }

}
