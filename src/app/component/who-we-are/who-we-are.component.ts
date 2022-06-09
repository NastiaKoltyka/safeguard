import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {
  statisticInformation=[
    {
      number:'3.5',
      description:'Billions',
      definition:'Preventive measurements implemented (cost reduction, loss of investment).'
    },
    {
      number:'25+',
      description:'Years',
      definition:'Of experience in minimizing risk and protecting assets.'
    },
    {
      number:'1.5',
      description:'Billions',
      definition:'Of experience in minimizing risk and protecting assets.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
    console.log(this.statisticInformation)
  }

}
