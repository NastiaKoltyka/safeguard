import { Injectable } from '@angular/core';
import { Info } from '../interface/info';

@Injectable({
  providedIn: 'root'
})
export class GetInformationService {
  readonly implementedMeasurements: Info = {
    counter: '3.5',
    description: 'Billions',
    definition: 'Preventive measurements implemented <br>(cost reduction, loss of investment).'
  };
  readonly minimizingRisk: Info = {
    counter: '25+',
    description: 'Years',
    definition: 'Of experience in minimizing risk <br> and protecting assets.'
  };
  readonly protectedAssets: Info =
    {
      counter: '1.5',
      description: 'Billions',
      definition: 'Of experience in minimizing risk <br> and protecting assets.'
    };
  readonly experience: Info =
    {
      counter: '25+',
      description: 'years of experience',
      definition: 'In handling legal issues.'
    };
  readonly strategy: Info =
    {
      counter: '230+',
      description: 'signature strategies',
      definition: 'Developed for our clients.'
    };
  readonly clients: Info =
    {
      counter: '145',
      description: 'corporate clients',
      definition: 'We helped thus far.'
    };
  readonly employees: Info =
    {
      counter: '30',
      description: 'employees working',
      definition: 'For your legal security.'
    };



  constructor() { }
  getAboutUsInformation() {
    return [this.implementedMeasurements, this.minimizingRisk, this.protectedAssets]
  }
  getAboutOurCompany() {
    return [this.experience, this.strategy, this.clients, this.employees]
  }

}
