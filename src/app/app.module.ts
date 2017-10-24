import { DossierService } from './dossier/dossier.service';
import { DossierModule } from './dossier/dossier.module';
import { ConfigsService } from './core/configs.service';

import { SidenavService } from './core/sidenav/sidenav.service';
import { MatSidenavModule, MatButtonModule } from '@angular/material';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    DossierModule
  ],
  providers: [SidenavService, ConfigsService, DossierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
