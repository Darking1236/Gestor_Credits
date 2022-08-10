import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupResultComponent } from './popup-result.component';

describe('PopupResultComponent', () => {
  let component: PopupResultComponent;
  let fixture: ComponentFixture<PopupResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
