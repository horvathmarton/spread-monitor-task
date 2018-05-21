import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-editor-dialog',
  templateUrl: './product-editor-dialog.component.html',
  styleUrls: ['./product-editor-dialog.component.scss']
})
export class ProductEditorDialogComponent implements OnInit {

  name: string;
  description: string;
  editorForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<ProductEditorDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    this.name = data.name;
    this.description = data.description;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.editorForm.value);
  }

  ngOnInit() {
    this.editorForm = new FormGroup({
      'name': new FormControl(this.name, Validators.required),
      'description': new FormControl(this.description, Validators.required)
    });
  }

}
