import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuIsOpened = false;
  constructor() {}

  ngOnInit(): void {}

  openMenu() {
    this.menuIsOpened = true;
  }
  closeWindow() {
    console.log('close')
    this.menuIsOpened = false;
  }
}
