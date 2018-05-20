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

  constructor(private router: Router) { }

  onPagination(event: PageEvent) {
    this.firstEntryIndex = event.pageIndex * event.pageSize;
    this.lastEntryIndex = this.firstEntryIndex + event.pageSize;
  }

  onSearch(form: NgForm) {
    const term = form.value.term;
    console.log(term);
    if (!term) { return; }
    this.router.navigate(['/products'], { queryParams: { filter: term } });
  }

  ngOnInit() {
    this.firstEntryIndex = this.paginationInfo.offset;
    this.lastEntryIndex = this.paginationInfo.offset + this.paginationInfo.limit;
  }

}
