import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss']
})
export class WhatWeDoComponent implements OnInit {
  works=[
    {
      text:'Training and Implementation',
      image:'../../../assets/images/2.png',
    },
    {
      text:'Cyber Consultants',
      image:'../../../assets/images/iPhone-12-Mockup 1.png',
    },
    {
      text:'Consultancy and brand protection',
      image:'../../../assets/images/peeled-banana-2 1.png',
    },
    {
      text:'Software',
      image:'../../../assets/images/macbook-mockup 1.png',
    },
  ]
  constructor() {
     
   }

  ngOnInit(): void {
  }

}
