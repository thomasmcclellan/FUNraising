import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCampaignNonProfitForm2Component } from './start-campaign-non-profit-form2.component';

describe('StartCampaignNonProfitForm2Component', () => {
  let component: StartCampaignNonProfitForm2Component;
  let fixture: ComponentFixture<StartCampaignNonProfitForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCampaignNonProfitForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCampaignNonProfitForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
