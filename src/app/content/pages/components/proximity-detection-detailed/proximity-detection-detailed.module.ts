import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProximityDetectionDetailedComponent } from './proximity-detection-detailed.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layout/layout.module';
import { PartialsModule } from '../../../partials/partials.module';
import { ListTimelineModule } from '../../../partials/layout/quick-sidebar/list-timeline/list-timeline.module';
import { WidgetChartsModule } from '../../../partials/content/widgets/charts/widget-charts.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon'
import { ThreatsService } from '../../../../_services/threats.service';

@NgModule({
	imports: [
		CommonModule,
		LayoutModule,
		PartialsModule,
		ListTimelineModule,
		WidgetChartsModule,
		MatGridListModule,
		MatTableModule,
		MatIconModule,
		RouterModule.forChild([
			{
				path: '',
				component: ProximityDetectionDetailedComponent
			}
		])
	],
	providers: [ThreatsService ],
	declarations: [ProximityDetectionDetailedComponent]
})
export class ProximityDetectionDetailedModule {}
