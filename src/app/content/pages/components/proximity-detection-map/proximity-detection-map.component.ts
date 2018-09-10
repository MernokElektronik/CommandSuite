import { Component, OnInit } from '@angular/core';
import { MapItem } from '../../../../_models/mapItem';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ThreatsService } from '../../../../_services/threats.service';

@Component({
  selector: 'm-proximity-detection-map',
  templateUrl: './proximity-detection-map.component.html',
  styleUrls: ['./proximity-detection-map.component.scss']
})
export class ProximityDetectionMapComponent implements OnInit {

  constructor(private threatsService: ThreatsService, private route: ActivatedRoute, private router: Router) { }

  testData: MapItem[];

  ngOnInit() {
    var params = JSON.parse(this.route.snapshot.params['d']);
    this.threatsService.getThreatByUnitBIDTimestamp(params.UID,params.BID, params.Timestamp).subscribe(mapItems => { this.testData = mapItems as MapItem[] })
    console.log(this.testData);
  }

}
