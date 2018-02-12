import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCampaignNonProfitConfirmComponent } from './start-campaign-non-profit-confirm.component';

describe('StartCampaignNonProfitConfirmComponent', () => {
  let component: StartCampaignNonProfitConfirmComponent;
  let fixture: ComponentFixture<StartCampaignNonProfitConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCampaignNonProfitConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCampaignNonProfitConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
