import { DossierAddComponent } from './dossier-add/dossier-add.component';
import { DossierListComponent } from './dossier-list/dossier-list.component';
import { DossierComponent } from './dossier.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    { path: '', component: DossierComponent, children:
    [
      { path: '', component: DossierListComponent, pathMatch: 'full' },
      { path: 'new', component: DossierAddComponent }
    ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DossierRoutingModule {}
