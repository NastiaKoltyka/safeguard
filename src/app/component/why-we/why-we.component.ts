import { Component, OnInit } from '@angular/core';
import { info } from '../../interface/info';

@Component({
  selector: 'app-why-we',
  templateUrl: './why-we.component.html',
  styleUrls: ['./why-we.component.scss'],
})

export class WhyWeComponent implements OnInit {
  information:info[]= [
    {
      counter: '25+',
      description:'years of experience',
      definition:'In handling legal issues.'
    },
    {
      counter: '230+',
      description:'signature strategies',
      definition:'Developed for our clients.'
    },
    {
      counter: '145',
      description:'corporate clients',
      definition:'We helped thus far.'
    },
    {
      counter: '30',
      description:'employees working',
      definition:'For your legal security.'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
