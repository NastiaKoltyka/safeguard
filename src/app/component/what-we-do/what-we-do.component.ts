import { Component, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  sequence,
  group,
  query,
  animateChild,
} from '@angular/animations';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss'],
  animations: [
    trigger('whatsAppPanel', [
      state('initial', style({ opacity: 0 })),
      state('expanded', style({ opacity: 1 })),
      transition('initial <=> expanded', [
        group([
          query('@whatsAppChildAnimation', animateChild()),
          animate('2s'),
        ]),
      ]),
    ]),
    trigger('whatsAppChildAnimation', [
      state('initial', style({ opacity: 0 })),
      state('expanded', style({ opacity: 1 })),
      transition('* <=> *', [sequence([animate('2s')])]),
    ]),
    trigger('gmailPanel', [
      state('initial', style({ opacity: 0 })),
      state('expanded', style({ opacity: 1 })),
      transition('initial <=> expanded', [
        group([query('@gmailChildAnimation', animateChild()), animate('2s')]),
      ]),
    ]),
    trigger('gmailChildAnimation', [
      state('initial', style({ opacity: 0 })),
      state('expanded', style({ opacity: 1 })),
      transition('* <=> *', [sequence([animate('2s')])]),
    ]),
  ],
})
export class WhatWeDoComponent implements OnInit {
  works = [
    {
      text: 'Training and Implementation',
      image: '../../../assets/images/2.png',
    },
    {
      text: 'Cyber Consultants',
      image: '../../../assets/images/iPhone-12-Mockup 1.png',
    },
    {
      text: 'Consultancy and brand protection',
      image: '../../../assets/images/peeled-banana-2 1.png',
    },
    {
      text: 'Software',
      image: '../../../assets/images/macbook-mockup 1.png',
    },
  ];
  whatsAppPanel: string = 'initial';
  gmailPanel: string = 'initial';
  constructor() {}

  ngOnInit(): void {}
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY >= 1958) {
      this.whatsAppPanel = 'expanded';

      setTimeout(() => {
        this.gmailPanel = 'expanded';
      }, 2000);
    }
  }
}
