
import { DossierAddDialogComponent } from './dossier-add/dossier-add-dialog/dossier-add-dialog.component';
import { DossierRoutingModule } from './dossier-routing.module';
import { DossierComponent } from './dossier.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DossierListComponent } from './dossier-list/dossier-list.component';
import {
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule } from '@angular/material';
import { DossierDetailsComponent } from './dossier-details/dossier-details.component';
import { DossierAddComponent } from './dossier-add/dossier-add.component';

@NgModule({
    declarations: [
        DossierComponent,
        DossierListComponent,
        DossierDetailsComponent,
        DossierAddComponent,
        DossierAddDialogComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatFormFieldModule,
        DossierRoutingModule
    ],
    exports: [],
    providers: [],
    entryComponents: [DossierAddDialogComponent]
})
export class DossierModule {}
