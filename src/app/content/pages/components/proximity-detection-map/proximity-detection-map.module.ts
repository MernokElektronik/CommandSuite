import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProximityDetectionMapComponent } from './proximity-detection-map.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layout/layout.module';
import { PartialsModule } from '../../../partials/partials.module';
import { ListTimelineModule } from '../../../partials/layout/quick-sidebar/list-timeline/list-timeline.module';
import { WidgetChartsModule } from '../../../partials/content/widgets/charts/widget-charts.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { ThreatsService } from '../../../../_services/threats.service';

@NgModule({
	imports: [
		CommonModule,
		LayoutModule,
		PartialsModule,
		ListTimelineModule,
		WidgetChartsModule,
		MatGridListModule,
		RouterModule.forChild([
			{
				path: '',
				component: ProximityDetectionMapComponent
			}
		])
	],
	providers: [ ThreatsService ],
	declarations: [ProximityDetectionMapComponent]
})
export class ProximityDetectionMapModule { }
