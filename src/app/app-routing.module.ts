import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { FindCampaignSnapshotComponent } from './findCampaign/find-campaign-snapshot/find-campaign-snapshot.component';
import { StartCampaignComponent } from './startCampaign/start-campaign/start-campaign.component';
import { StartCampaignNonProfitForm1Component } from './startCampaign/start-campaign-non-profit-form1/start-campaign-non-profit-form1.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'howItWorks', component: HowItWorksComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'pricing', component: PricingComponent },

  { path: 'snapshot', component: FindCampaignSnapshotComponent },

  { path: 'startCampaign', component: StartCampaignComponent },
  { path: 'startCampaign/nonprofit/form1', component: StartCampaignNonProfitForm1Component },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}