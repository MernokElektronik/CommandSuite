import { Component, OnInit } from '@angular/core';
import { MapItem } from '../../../../_models/mapItem';
import { ThreatsService } from '../../../../_services/threats.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'm-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss']
})
export class UnitListComponent implements OnInit {

  constructor(private threatsService: ThreatsService, private route: ActivatedRoute, private router: Router) { }

  testData: MapItem[] = [];

  ngOnInit() {
    this.testData = [];
    this.threatsService.getUnits().subscribe(mapItems => { this.testData = mapItems as MapItem[] });;
  }

  ProximityDetectionSummary(UID) {
    var Parameters: any = {
      Unit: {
        UID: UID,
        VID: "All",
        Type: "All",
        Speed: "5 km/h"
      },
      Threat: {
        UID: "All",
        VID: "All",
        Type: "All",
        Speed: "N/A"
      }
    }
    console.log(JSON.stringify(Parameters));
    this.router.navigate(['/ProximityDetectionSummary', JSON.stringify(Parameters)]);
  }
}
