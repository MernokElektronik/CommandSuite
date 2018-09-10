import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximityDetectionDetailedComponent } from './proximity-detection-detailed.component';

describe('ProximityDetectionDetailedComponent', () => {
  let component: ProximityDetectionDetailedComponent;
  let fixture: ComponentFixture<ProximityDetectionDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximityDetectionDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximityDetectionDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
