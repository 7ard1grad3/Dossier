import { StoreDataService } from './../../shared/store_data.service';
import { DossierService } from './../dossier.service';
import { Dossier } from '../dossier.model';
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
  constructor(
    public _dialog: MatDialog,
    private _dossierService: DossierService,
    private _storeDataService: StoreDataService) { }

  ngOnInit() {
    this._dossierService.dossierChanged.subscribe(
        (dossiers: Dossier[]) => {
            this._storeDataService.storeDossiers(dossiers);
        }
    );
}

  openDialog(): void {
    const dialogRef = this._dialog.open(DossierAddDialogComponent, {
      width: '250px',
      data: { name: this.name, lastname: this.lastname }
    });
    dialogRef.afterClosed().subscribe(
      (_dossier: Dossier) => {
        this._dossierService.setDossier(_dossier);
    });
  }

}

