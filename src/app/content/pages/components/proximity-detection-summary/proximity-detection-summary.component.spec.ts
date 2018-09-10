import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximityDetectionSummaryComponent } from './proximity-detection-summary.component';

describe('ProximityDetectionSummaryComponent', () => {
  let component: ProximityDetectionSummaryComponent;
  let fixture: ComponentFixture<ProximityDetectionSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximityDetectionSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximityDetectionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
