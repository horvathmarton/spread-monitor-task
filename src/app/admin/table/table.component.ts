import { Component, OnInit, Input } from '@angular/core';
import { MatRow, PageEvent } from '@angular/material';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() dataStructure;

  firstEntryIndex: number;
  lastEntryIndex: number;
  searchForm: FormGroup;
  private filterTerm: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  onPagination(event: PageEvent): void {
    this.firstEntryIndex = event.pageIndex * event.pageSize;
    this.lastEntryIndex = this.firstEntryIndex + event.pageSize;
    this.router.navigate([`/${this.dataStructure.name}`], { queryParams: this.getQueryParams() });
  }

  onSearch(): void {
    this.filterTerm = this.searchForm.value.searchTerm;
    this.router.navigate([`/${this.dataStructure.name}`], { queryParams: this.getQueryParams() });
  }

  editRecord(row: MatRow): void {
    alert(row);
  }

  private getQueryParams() {
    return {
      limit: this.lastEntryIndex - this.firstEntryIndex,
      offset: this.firstEntryIndex,
      auth: this.authService.getToken(),
      filter: this.filterTerm
    };
  }

  ngOnInit() {
    const limit = +this.route.snapshot.queryParamMap.get('limit') || 10;
    const offset = +this.route.snapshot.queryParamMap.get('offset') || 0;
    this.firstEntryIndex = offset;
    this.lastEntryIndex = offset + limit;

    this.searchForm = new FormGroup({
      'searchTerm': new FormControl(null)
    });
  }

}
