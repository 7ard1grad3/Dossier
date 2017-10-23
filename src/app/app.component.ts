import { Component, ViewEncapsulation } from '@angular/core';
import {MatSidenavModule} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: false,
})
export class AppComponent {
  title = 'app';
  constructor() {
  }
}
