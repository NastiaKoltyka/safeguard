import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuIsOpened = false;
  constructor() {}

  openMenu() {
    this.menuIsOpened = true;
  }
  closeWindow() {
    this.menuIsOpened = false;
  }
}
