import { DossierRoutingModule } from './dossier/dossier-routing.module';
import { DossierModule } from './dossier/dossier.module';
import { DossierComponent } from './dossier/dossier.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

/* Base routing file */
const routes: Routes = [
    { path: '', loadChildren: './dossier/dossier.module#DossierModule', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class CoreRoutingModule {}
