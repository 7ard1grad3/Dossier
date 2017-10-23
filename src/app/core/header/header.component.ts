import { ConfigsService } from '../configs.service';
import { SidenavService } from '../sidenav/sidenav.service';
import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = this._configService.config.APP_NAME;
  sidenav: SidenavService;
  constructor(private _sidenavService: SidenavService, private _configService: ConfigsService) {}

  ngOnInit() {
    this.sidenav = this._sidenavService;
  }

}
