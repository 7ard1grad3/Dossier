import { HttpResponse } from '@angular/common/http/src/response';
import { DossierService } from './../dossier/dossier.service';
import { Dossier } from './../dossier/dossier.model';
import { ConfigsService } from './../core/configs.service';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class StoreDataService {
    constructor(
        private _http: HttpClient,
        private _configs: ConfigsService,
        private _dossierService: DossierService
    ) {}

    storeDossiers(dossier: Dossier[]) {
        this._http.put(this._configs.config.SERVER_URL, dossier,
        {
            observe: 'events'
         })
        .subscribe(
            (response: HttpResponse<any>) => {
                if (response.type === 4) {
                    // Success on request
                    this.updateDosssierService(response.body);
                }
            },
            error => console.log(error)
        );
    }

    getDossiers() {
        return this._http.get<Dossier[]>(this._configs.config.SERVER_URL,
            {
                observe: 'events'
             });
    }
    private updateDosssierService(_dossiers: Dossier[]) {
        this._dossierService.setDossiers(_dossiers);
    }
}
