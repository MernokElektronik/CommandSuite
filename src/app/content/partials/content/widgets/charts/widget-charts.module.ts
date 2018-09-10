import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';
import { RadarSunburstChartComponent } from './radar-sunburst-chart/radar-sunburst-chart.component';
import { ThreatEventMapComponent } from './threat-event-map/threat-event-map.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
	imports: [
		CommonModule,
		ChartsModule,
		NgxMapboxGLModule.withConfig({
			accessToken: 'pk.eyJ1IjoiY2FsdW1teW5oYXJkdCIsImEiOiJjamxubDF4NWIxZjdxM3FwYjZibWFyY2NhIn0.AUXrVCj47Kt4jhXYK708oQ'
		})
	],
	exports: [
		BarChartComponent,
		DoughnutChartComponent,
		RadarSunburstChartComponent,
		ThreatEventMapComponent,
	],
	declarations: [
		BarChartComponent,
		DoughnutChartComponent,
		RadarSunburstChartComponent,
		ThreatEventMapComponent,
	]
})
export class WidgetChartsModule {}
