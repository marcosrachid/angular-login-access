import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent {

  constructor(public dialogRef: MatDialogRef<TermsComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
