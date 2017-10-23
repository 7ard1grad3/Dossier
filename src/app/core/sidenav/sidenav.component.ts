import { SidenavService } from './sidenav.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav;
  constructor(private _sidenavService: SidenavService) {}
  ngOnInit() {
    this._sidenavService.menu = this.sidenav;
  }

}
