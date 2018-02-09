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
import { StartCampaignNonProfitForm1Component } from './startCampaign/start-campaign-non-profit-form1/start-campaign-non-profit-form1.component';


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
    StartCampaignNonProfitForm1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
