import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonProfitSuccessComponent } from './non-profit-success.component';

describe('NonProfitSuccessComponent', () => {
  let component: NonProfitSuccessComponent;
  let fixture: ComponentFixture<NonProfitSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonProfitSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonProfitSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
