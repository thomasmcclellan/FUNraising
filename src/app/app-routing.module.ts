import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { HowToSucceedComponent } from './how-to-succeed/how-to-succeed.component';
import { FaqComponent } from './faq/faq.component';

import { AboutComponent } from './about/about.component';

import { ContactComponent } from './contact/contact.component';

import { PricingComponent } from './pricing/pricing.component';

import { ProfileComponent } from './profile/profile.component';

import { FindCampaignSnapshotComponent } from './findCampaign/find-campaign-snapshot/find-campaign-snapshot.component';
import { FindCampaignComponent } from './findCampaign/find-campaign/find-campaign.component';
import { FindCampaignCategoryComponent } from './findCampaign/find-campaign-category/find-campaign-category.component';

import { GivingCampaignPageComponent } from './giving/giving-campaign-page/giving-campaign-page.component';
import { GivingEnvelopeWallComponent } from './giving/giving-envelope-wall/giving-envelope-wall.component';
import { GivingDonateComponent } from './giving/giving-donate/giving-donate.component';

import { StartCampaignComponent } from './startCampaign/start-campaign/start-campaign.component';
import { StartCampaignNonProfitSuccessComponent } from './startCampaign/nonProfit/start-campaign-non-profit-success/start-campaign-non-profit-success.component';
import { StartCampaignNonProfitForm1Component } from './startCampaign/nonProfit/start-campaign-non-profit-form1/start-campaign-non-profit-form1.component';
import { StartCampaignNonProfitForm2Component } from './startCampaign/nonProfit/start-campaign-non-profit-form2/start-campaign-non-profit-form2.component';
import { StartCampaignNonProfitConfirmComponent } from './startCampaign/nonProfit/start-campaign-non-profit-confirm/start-campaign-non-profit-confirm.component';
import { StartCampaignPersonalForm1Component } from './startCampaign/personalCause/start-campaign-personal-form1/start-campaign-personal-form1.component';
import { StartCampaignPersonalSuccessComponent } from './startCampaign/personalCause/start-campaign-personal-success/start-campaign-personal-success.component';
import { StartCampaignPersonalForm2Component } from './startCampaign/personalCause/start-campaign-personal-form2/start-campaign-personal-form2.component';
import { StartCampaignPersonalConfirmComponent } from './startCampaign/personalCause/start-campaign-personal-confirm/start-campaign-personal-confirm.component';

import { DeleteCampaignComponent } from './delete-campaign/delete-campaign.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'howItWorks', component: HowItWorksComponent },
  { path: 'howToSucceed', component: HowToSucceedComponent },
  { path: 'faq', component: FaqComponent },

  { path: 'about', component: AboutComponent },

  { path: 'contact', component: ContactComponent },

  { path: 'pricing', component: PricingComponent },

  { path: 'profile', component: ProfileComponent },

  { path: 'snapshot', component: FindCampaignSnapshotComponent },
  { path: 'findCampaign', component: FindCampaignComponent },
  { path: 'browseCategory', component: FindCampaignCategoryComponent },

  { path: 'campaignPage', component: GivingCampaignPageComponent },
  { path: 'envelopeWall', component: GivingEnvelopeWallComponent },
  { path: 'donate', component: GivingDonateComponent },

  { path: 'startCampaign', component: StartCampaignComponent },
  { path: 'startCampaign-nonprofit-success', component: StartCampaignNonProfitSuccessComponent },
  { path: 'startCampaign-nonprofit-form1', component: StartCampaignNonProfitForm1Component },
  { path: 'startCampaign-nonprofit-form2', component: StartCampaignNonProfitForm2Component },
  { path: 'startCampaign-nonprofit-confirmation', component: StartCampaignNonProfitConfirmComponent },
  { path: 'startCampaign-personalCause-success', component: StartCampaignPersonalSuccessComponent },
  { path: 'startCampaign-personalCause-form1', component: StartCampaignPersonalForm1Component },
  { path: 'startCampaign-personalCause-form2', component: StartCampaignPersonalForm2Component },
  { path: 'startCampaign-personalCause-confirmation', component: StartCampaignPersonalConfirmComponent },

  { path: 'deleteCampaign', component: DeleteCampaignComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}