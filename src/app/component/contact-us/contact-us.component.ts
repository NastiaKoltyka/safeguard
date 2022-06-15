import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  works = [
    {
      title: 'Safeguarding our <br> clients',
      description:
        'Discretion is key, therefore we have converted <br> all our case studies without mentioning our <br> clients names.',
      button: 'See Case Studies',
    },
    {
      title: `Let's meet & explore <br> options together`,
      description: `We're here to help and answer any question <br> you might have. We look forward to hearing <br> from you.`,
      button: 'Contact Us',
    },
    {
      title: 'Discover where we <br> came from',
      description: `We're here to help and answer any question <br> you might have. We look forward to hearing <br> from you.`,
      button: 'Our Timeline',
    },
  ];
  contactForm: FormGroup;
  constructor() {
    this.contactForm = new FormGroup({
      fullName: new FormControl('Eugen Ulianov', Validators.required),
      companyName: new FormControl('Oldmin Company', Validators.required),
      "phoneNumber": new FormControl('555555555', Validators.pattern("[0-9]{10}")),
      email: new FormControl('Oldmin@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      message: new FormControl('With our global footprint and our specialized team members and partners we know what it takes to make sure that we can deliver a minimum risk environment for our clients.', Validators.required),
    });
  }

  ngOnInit(): void {}
  submit() {
    if(this.contactForm.valid){
      console.log(this.contactForm.value);
    }
  }
}

export interface ContactFormInfo{
  fullName:string,
  companyName:string,
}

class SomeModule{
  readonly fullName: string = "Eugen Ulianov";
  readonly companyName: string = "Oldmin Company"

  GetContactFormPrefiller():ContactFormInfo {
    return {
      fullName: this.fullName,
      companyName: this.companyName,
    }
  }
}
