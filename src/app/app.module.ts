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
    CoreModule
  ],
  providers: [SidenavService, ConfigsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
