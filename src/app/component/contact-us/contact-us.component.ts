import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
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
      fullName: new FormControl('', Validators.required),
      companyName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{10}'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl(''),
    });
  }

  submit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.contactForm.reset();
    }
  }
}
