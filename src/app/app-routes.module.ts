import { HomeComponent } from './core/home/home.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

/* Base routing file */
const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class CoreRoutingModule {}
