import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { info } from '../../interface/info';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {
  statisticInformation:info[]=[
    {
      counter:'3.5',
      description:'Billions',
      definition:'Preventive measurements implemented <br>(cost reduction, loss of investment).'
    },
    {
      counter:'25+',
      description:'Years',
      definition:'Of experience in minimizing risk <br> and protecting assets.'
    },
    {
      counter:'1.5',
      description:'Billions',
      definition:'Of experience in minimizing risk <br> and protecting assets.'
    }
  ]
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event:Event){
    this.pageYoffset = window.pageYOffset;
 }
  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {
    
  }
  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
}


}
