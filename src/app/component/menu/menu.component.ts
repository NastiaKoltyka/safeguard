import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menuIsOpened = false;
  @Output() menuIsClosed = new EventEmitter<string>();
  constructor() {
   }

  ngOnInit(): void {
  }
  close(){
    this.menuIsOpened=false;
    this.menuIsClosed.emit();
  }

}
