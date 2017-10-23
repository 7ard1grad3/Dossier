import { MatGridListModule, MatIconModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreRoutingModule } from './../app-routes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import 'hammerjs';

@NgModule({
    declarations: [HomeComponent, HeaderComponent, SidenavComponent],
    imports:
    [
        CommonModule,
        CoreRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatGridListModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule
    ],
    exports: [CoreRoutingModule, BrowserAnimationsModule, HeaderComponent, MatSidenavModule, SidenavComponent],
    providers: [],
})
export class CoreModule {}
