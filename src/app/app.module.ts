import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { WhoWeAreComponent } from './component/who-we-are/who-we-are.component';
import { WhatWeDoComponent } from './component/what-we-do/what-we-do.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WhyWeComponent } from './component/why-we/why-we.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhoWeAreComponent,
    WhatWeDoComponent,
    WhyWeComponent,
    ContactUsComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
