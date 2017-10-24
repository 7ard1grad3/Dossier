import { DossierModule } from './../dossier/dossier.module';
import { MatGridListModule, MatIconModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import 'hammerjs';

@NgModule({
    declarations: [ HeaderComponent, SidenavComponent],
    imports:
    [
        CommonModule,
        CoreRoutingModule,
        BrowserAnimationsModule,
        DossierModule,
        MatToolbarModule,
        MatGridListModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule
    ],
    exports: [CoreRoutingModule, BrowserAnimationsModule, HeaderComponent, MatSidenavModule, SidenavComponent],
    providers: []
})
export class CoreModule {}
