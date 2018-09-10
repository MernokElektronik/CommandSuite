import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatEventMapComponent } from './threat-event-map.component';

describe('ThreatEventMapComponent', () => {
  let component: ThreatEventMapComponent;
  let fixture: ComponentFixture<ThreatEventMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreatEventMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreatEventMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
