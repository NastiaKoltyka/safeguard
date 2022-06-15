import { Component, OnInit } from '@angular/core';
import { GetInformationService } from 'src/app/services/get-information.service';
import { Info } from '../../interface/info';

@Component({
  selector: 'app-why-we',
  templateUrl: './why-we.component.html',
  styleUrls: ['./why-we.component.scss'],
})

export class WhyWeComponent implements OnInit {
  information: Info[] = [];
  constructor(private getInfo: GetInformationService) {
    this.information = this.getInfo.getAboutOurCompany();
  }

  ngOnInit(): void { }
}
