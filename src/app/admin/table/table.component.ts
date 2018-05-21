import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogConfig, MatRow, PageEvent} from '@angular/material';
import {FormControl, FormGroup } from '@angular/forms';
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
    private dialog: MatDialog,
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

  editRecord(record: MatRow): void {
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.autoFocus = true;
    config.width = '50vw';

    config.data = record;

    const dialogRef = this.dialog.open(this.dataStructure.editorDialog, config);
    dialogRef.afterClosed().subscribe(data => {
      this.dataStructure.updateFunction(record.id, data);
    });
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
