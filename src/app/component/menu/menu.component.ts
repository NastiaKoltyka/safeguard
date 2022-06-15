import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() menuIsOpened = false;
  @Output() menuIsClosed = new EventEmitter<string>();
  constructor() {}

  close() {
    this.menuIsOpened = false;
    this.menuIsClosed.emit();
  }
}
