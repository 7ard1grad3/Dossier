import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-add-dossier-dialog',
  templateUrl: './dossier-add-dialog.component.html',
  styleUrls: ['./dossier-add-dialog.component.css']
})
export class DossierAddDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DossierAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
