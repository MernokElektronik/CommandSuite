import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ActionComponent } from './header/action/action.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ErrorPageComponent } from './snippets/error-page/error-page.component';
import { InnerComponent } from "./components/inner/inner.component";

const routes: Routes = [
	{
		path: '',
		component: PagesComponent,
		// Remove comment to enable login
		// canActivate: [NgxPermissionsGuard],
		data: {
			permissions: {
				only: ['ADMIN', 'USER'],
				except: ['GUEST'],
				redirectTo: '/login'
			}
		},
		children: [
			{
				path: 'ProximityDetectionSummary/:d',
				loadChildren: './components/proximity-detection-summary/proximity-detection-summary.module#ProximityDetectionSummaryModule'
			},
			{
				path: '',
				loadChildren: './components/proximity-detection-summary/proximity-detection-summary.module#ProximityDetectionSummaryModule'
			},
			{
				path: 'UnitList',
				loadChildren: './components/unit-list/unit-list.module#UnitListModule'
			},
			{
				path: 'ProximityDetectionDetailed/:d',
				loadChildren: './components/proximity-detection-detailed/proximity-detection-detailed.module#ProximityDetectionDetailedModule'
			},
			{
				path: 'ProximityDetectionDetailed/',
				loadChildren: './components/proximity-detection-detailed/proximity-detection-detailed.module#ProximityDetectionDetailedModule',
			},
			{
				path: 'ProximityDetectionMap/:d',
				loadChildren: './components/proximity-detection-map/proximity-detection-map.module#ProximityDetectionMapModule',
			},
			{
				path: 'header/actions',
				component: ActionComponent
			},
			{
				path: 'inner',
				component: InnerComponent
			},
		]
	},
	{
		path: 'login',
		// canActivate: [NgxPermissionsGuard],
		loadChildren: './auth/auth.module#AuthModule',
		data: {
			permissions: {
				except: 'ADMIN'
			}
		},
	},
	{
		path: '404',
		component: ErrorPageComponent
	},
	{
		path: 'error/:type',
		component: ErrorPageComponent
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule {
}
