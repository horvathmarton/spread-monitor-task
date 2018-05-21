import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ProductEditorDialogComponent} from '../../products/product-editor-dialog/product-editor-dialog.component';

@Component({
  selector: 'app-user-editor-dialog',
  templateUrl: './user-editor-dialog.component.html',
  styleUrls: ['./user-editor-dialog.component.scss']
})
export class UserEditorDialogComponent implements OnInit {

  first_name: string;
  last_name: string;
  email: string;
  username: string;
  editorForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<ProductEditorDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.email = data.email;
    this.username = data.username;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.editorForm.value);
  }

  ngOnInit() {
    this.editorForm = new FormGroup({
      'first_name': new FormControl(this.first_name, Validators.required),
      'last_name': new FormControl(this.last_name, Validators.required),
      'email': new FormControl(this.email, [Validators.required, Validators.email]),
      'username': new FormControl(this.username, Validators.required)
    });
  }

}
