import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarSunburstChartComponent } from './radar-sunburst-chart.component';

describe('RadarSunburstChartComponent', () => {
  let component: RadarSunburstChartComponent;
  let fixture: ComponentFixture<RadarSunburstChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadarSunburstChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarSunburstChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
