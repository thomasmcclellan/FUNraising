import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';

import { FindCampaignSnapshotComponent } from './findCampaign/find-campaign-snapshot/find-campaign-snapshot.component';

import { StartCampaignComponent } from './startCampaign/start-campaign/start-campaign.component';
import { StartCampaignNonProfitSuccessComponent } from './startCampaign/start-campaign-non-profit-success/start-campaign-non-profit-success.component';
import { StartCampaignNonProfitForm1Component } from './startCampaign/start-campaign-non-profit-form1/start-campaign-non-profit-form1.component';
import { StartCampaignPersonalForm1Component } from './startCampaign/start-campaign-personal-form1/start-campaign-personal-form1.component';
import { StartCampaignPersonalForm2Component } from './startCampaign/start-campaign-personal-form2/start-campaign-personal-form2.component';
import { StartCampaignNonProfitForm2Component } from './startCampaign/start-campaign-non-profit-form2/start-campaign-non-profit-form2.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HowItWorksComponent,
    AboutComponent,
    PricingComponent,
    ContactComponent,
    
    FindCampaignSnapshotComponent,

    StartCampaignComponent,
    
    StartCampaignNonProfitSuccessComponent,
    StartCampaignNonProfitForm1Component,
    StartCampaignNonProfitForm2Component,

    StartCampaignPersonalForm1Component,
    StartCampaignPersonalForm2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
