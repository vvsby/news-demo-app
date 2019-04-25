import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-failed',
  templateUrl: './failed.component.html',
  styleUrls: ['./failed.component.css']
})
export class FailedComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FailedComponent>
  ) { }

  ngOnInit() {
  }
  cancel() {
    this.dialogRef.close();
  }

}
