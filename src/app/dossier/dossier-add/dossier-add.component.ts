import { DossierAddDialogComponent } from './dossier-add-dialog/dossier-add-dialog.component';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dossier-add',
  templateUrl: './dossier-add.component.html',
  styleUrls: ['./dossier-add.component.css']
})
export class DossierAddComponent implements OnInit {

  name = '';
  lastname = '';
  constructor(public _dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this._dialog.open(DossierAddDialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.lastname }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);

    });
  }

}

