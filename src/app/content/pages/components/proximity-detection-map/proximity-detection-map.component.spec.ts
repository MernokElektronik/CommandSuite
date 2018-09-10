import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximityDetectionMapComponent } from './proximity-detection-map.component';

describe('ProximityDetectionMapComponent', () => {
  let component: ProximityDetectionMapComponent;
  let fixture: ComponentFixture<ProximityDetectionMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximityDetectionMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximityDetectionMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
