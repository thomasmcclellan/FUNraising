import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CampaignModule } from './campaign/campaign.module';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { HowToSucceedComponent } from './how-to-succeed/how-to-succeed.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HowItWorksComponent,
    HowToSucceedComponent,
    FaqComponent,
    AboutComponent,
    PricingComponent,
    ContactComponent,
    AdminComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CampaignModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
