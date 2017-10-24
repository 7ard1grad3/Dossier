import { IDossier } from './dossier.model';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class DossierService {
  private dossiers: IDossier[] = [
    new IDossier('Iluha', 'Sheidin'),
    new IDossier('Vasiok', 'Pupkin'),
    new IDossier('Kolia', 'Kolianov'),
];
  constructor() { }
  getDossier() {
    return this.dossiers;
  }

}
