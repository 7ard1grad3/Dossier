
import { ActivatedRoute, Router } from '@angular/router';
import { Dossier } from '../dossier.model';
import { DossierService } from './../dossier.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dossier-list',
  templateUrl: './dossier-list.component.html',
  styleUrls: ['./dossier-list.component.css']
})
export class DossierListComponent implements OnInit {

  dossiers: Dossier[];
  constructor(private _dossierService: DossierService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.dossiers = this._dossierService.getDossier();

/*       this._dossierService.dossierChanged.subscribe(
          (dossiers: Dossier[]) => {
              this._storeDataService.storeDossiers(dossiers);
          } */


  }

  add() {
    this._router.navigate(['/new'], {relativeTo: this._activatedRoute});
  }

}
