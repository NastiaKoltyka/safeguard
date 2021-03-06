import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { GetInformationService } from 'src/app/services/get-information.service';
import { Info } from '../../interface/info';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss'],
})
export class WhoWeAreComponent {
  statisticInformation: Info[] = [];
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event: Event) {
    this.pageYoffset = window.pageYOffset;
  }
  constructor(
    private scroll: ViewportScroller,
    private getInfo: GetInformationService
  ) {
    this.statisticInformation = this.getInfo.getAboutUsInformation();
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }
}
