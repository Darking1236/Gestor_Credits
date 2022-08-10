import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsFormAnalysisComponent } from './clients-form-analysis.component';

describe('ClientsFormAnalysisComponent', () => {
  let component: ClientsFormAnalysisComponent;
  let fixture: ComponentFixture<ClientsFormAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsFormAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsFormAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
