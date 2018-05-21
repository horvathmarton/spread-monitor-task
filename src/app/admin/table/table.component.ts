import { Component, OnInit, Input } from '@angular/core';
import { PageEvent } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
  filterTerm: string;

  constructor(private router: Router) { }

  onPagination(event: PageEvent) {
    this.firstEntryIndex = event.pageIndex * event.pageSize;
    this.lastEntryIndex = this.firstEntryIndex + event.pageSize;
    this.router.navigate([`/${this.dataStructure.name}`], { queryParams: this.getQueryParams() });
  }

  onSearch(form: NgForm) {
    this.filterTerm = form.value.term;
    this.router.navigate([`/${this.dataStructure.name}`], { queryParams: this.getQueryParams() });
  }

  getQueryParams() {
    return {
      filter: this.filterTerm,
      offset: this.firstEntryIndex,
      limit: this.lastEntryIndex - this.firstEntryIndex
    };
  }

  ngOnInit() {
    this.firstEntryIndex = this.paginationInfo.offset;
    this.lastEntryIndex = this.paginationInfo.offset + this.paginationInfo.limit;
  }

}
