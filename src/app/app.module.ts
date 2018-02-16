import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
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
import { ProfileComponent } from './profile/profile.component';
import { FindCampaignSnapshotComponent } from './findCampaign/find-campaign-snapshot/find-campaign-snapshot.component';
import { FindCampaignComponent } from './findCampaign/find-campaign/find-campaign.component';
import { FindCampaignCategoryComponent } from './findCampaign/find-campaign-category/find-campaign-category.component';
import { GivingCampaignPageComponent } from './giving/giving-campaign-page/giving-campaign-page.component'
;import { GivingEnvelopeWallComponent } from './giving/giving-envelope-wall/giving-envelope-wall.component';
import { GivingDonateComponent } from './giving/giving-donate/giving-donate.component';
import { StartCampaignComponent } from './startCampaign/start-campaign/start-campaign.component';
import { StartCampaignNonProfitSuccessComponent } from './startCampaign/nonProfit/start-campaign-non-profit-success/start-campaign-non-profit-success.component';
import { StartCampaignNonProfitForm1Component } from './startCampaign/nonProfit/start-campaign-non-profit-form1/start-campaign-non-profit-form1.component';
import { StartCampaignNonProfitForm2Component } from './startCampaign/nonProfit/start-campaign-non-profit-form2/start-campaign-non-profit-form2.component';
import { StartCampaignNonProfitConfirmComponent } from './startCampaign/nonProfit/start-campaign-non-profit-confirm/start-campaign-non-profit-confirm.component';
import { StartCampaignPersonalSuccessComponent } from './startCampaign/personalCause/start-campaign-personal-success/start-campaign-personal-success.component';
import { StartCampaignPersonalForm1Component } from './startCampaign/personalCause/start-campaign-personal-form1/start-campaign-personal-form1.component';
import { StartCampaignPersonalForm2Component } from './startCampaign/personalCause/start-campaign-personal-form2/start-campaign-personal-form2.component';
import { StartCampaignPersonalConfirmComponent } from './startCampaign/personalCause/start-campaign-personal-confirm/start-campaign-personal-confirm.component';
import { DeleteCampaignComponent } from './delete-campaign/delete-campaign.component';


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
    ProfileComponent,
    FindCampaignSnapshotComponent,
    FindCampaignComponent,
    FindCampaignCategoryComponent,
    GivingCampaignPageComponent,
    GivingEnvelopeWallComponent,
    GivingDonateComponent,
    StartCampaignComponent,
    StartCampaignNonProfitSuccessComponent,
    StartCampaignNonProfitForm1Component,
    StartCampaignNonProfitForm2Component,
    StartCampaignNonProfitConfirmComponent,
    StartCampaignPersonalSuccessComponent,
    StartCampaignPersonalForm1Component,
    StartCampaignPersonalForm2Component,
    StartCampaignPersonalConfirmComponent,
    DeleteCampaignComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
