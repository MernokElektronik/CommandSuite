import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'm-doughnut-chart',
	templateUrl: './doughnut-chart.component.html',
	styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {
	// Doughnut
	@Input() doughnutChartLabels: string[] = ['Download', 'In-Store', 'Mail-Order'];
	@Input() doughnutChartColors: any[] = [
		{
			backgroundColor: ['#0f0','#00f','#f00']
		}
	];
	@Input() doughnutChartData: number[] = [350, 450, 100];
	doughnutChartType: string = 'doughnut';
	doughnutChartOptions: any = {
		responsive: true,
		maintainAspectRatio: false
	};

	constructor() { }

	ngOnInit() {
	}

	// events
	chartClicked(e: any): void {
	}

	chartHovered(e: any): void {
	}

}
