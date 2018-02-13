import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCampaignNonProfitForm1Component } from './start-campaign-non-profit-form1.component';

describe('StartCampaignNonProfitForm1Component', () => {
  let component: StartCampaignNonProfitForm1Component;
  let fixture: ComponentFixture<StartCampaignNonProfitForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCampaignNonProfitForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCampaignNonProfitForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
