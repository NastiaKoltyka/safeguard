import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navigationButtons:Array<string>=['Home', 'About Us', 'What We Do', 'Contact Us']
  constructor() { }

  ngOnInit(): void {
  }

}
