import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreDataService } from './shared/store_data.service';
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
    HttpClientModule,
    CoreModule,
    DossierModule
  ],
  providers: [SidenavService, ConfigsService, DossierService, StoreDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
