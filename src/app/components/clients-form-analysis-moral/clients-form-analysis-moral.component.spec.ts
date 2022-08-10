import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsFormAnalysisMoralComponent } from './clients-form-analysis-moral.component';

describe('ClientsFormAnalysisMoralComponent', () => {
  let component: ClientsFormAnalysisMoralComponent;
  let fixture: ComponentFixture<ClientsFormAnalysisMoralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsFormAnalysisMoralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsFormAnalysisMoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
