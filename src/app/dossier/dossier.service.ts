import { StoreDataService } from './../shared/store_data.service';
import { Subject } from 'rxjs/Rx';
import { Dossier } from './dossier.model';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class DossierService {
  private dossiers: Dossier[] = [];
  constructor(private _storeDataService: StoreDataService) { }
  dossierChanged = new Subject<Dossier[]>();
  /* Method to add one dossier */
  setDossier(_dossier: Dossier) {
    this.dossiers.push(_dossier);
    this.dossierChanged.next(this.dossiers); // Inform about dosier change
  }

  setDossiers(_dossiers: Dossier[]) {
    this.dossiers = _dossiers;
  }

  getDossier(): Dossier[] {
    return this._storeDataService.getDossiers().subscribe(
      (response: HttpResponse<any>) => {
          if (response.type === 4) {
              // Success on request
              return response.body;
          }
      },
      error => console.log(error)
  );
  }

}
