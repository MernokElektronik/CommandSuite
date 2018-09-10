import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MapItem } from '../../../../_models/mapItem';
import { ThreatsService } from '../../../../_services/threats.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'm-proximity-detection-summary',
  templateUrl: './proximity-detection-summary.component.html',
  styleUrls: ['./proximity-detection-summary.component.scss']
})
export class ProximityDetectionSummaryComponent implements OnInit {
  eventId: number = 0;

  opacityData: number[][] = [
    [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
    [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
    [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
  ];
  labelData: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  testData: MapItem[];

  constructor(private threatsService: ThreatsService, private route: ActivatedRoute, private router: Router) { }

  changeEvent(idVal: any) {
    this.eventId = idVal;
  }

  Parameters: any = {
    Unit: {
      UID: "All",
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

  ngOnInit() {
    if (this.route.snapshot.params['d'] === undefined){
      console.log("root");
    } else {
      this.Parameters = JSON.parse(this.route.snapshot.params['d']);
    }

    if (this.Parameters.Unit.UID == "All")
      this.threatsService.getThreats().subscribe(mapItems => { this.testData = mapItems as MapItem[] });
    else
      this.threatsService.getThreatsByUnit(this.Parameters.Unit.UID).subscribe(mapItems => { this.testData = mapItems as MapItem[] });
    
    for (let threat of this.testData) {
      for (let point of threat.points) {
        this.labelData[point.Threat_Zone - 1][point.Threat_Sector - 1]++;
        this.opacityData[point.Threat_Zone - 1][point.Threat_Sector - 1] = 1;
      }
    }
  }

  sectionClick(event: any) {
    console.log(event);
    var slices = (2 / 12) * 7;
    var x = event.pageX - (event.srcElement.offsetLeft + event.srcElement.offsetParent.offsetLeft),
      y = event.pageY - (event.srcElement.offsetTop + event.srcElement.offsetParent.offsetTop);
    var xHalf = event.srcElement.width/2;
    if (event.srcElement.width > event.srcElement.height)
      xHalf = event.srcElement.height/2;
    var incrSize = (xHalf - 25) / 3;
    var dist = Math.sqrt(((xHalf - x) * (xHalf - x)) + ((xHalf - y) * (xHalf - y)));
    if (dist > 25)
      dist = Math.ceil((dist - 25) / incrSize);
    else
      dist = 0;
    dist = dist - 1;
    var angle = Math.atan2((y - xHalf), (x - xHalf)) * 180 / Math.PI + 75;
    
    angle = Math.floor((angle < 0 ? 360 + angle : angle) / 30);
    if (dist < 0 || dist > 2) {
      if (dist < 0)
      this.router.navigate(['/ProximityDetectionDetailed', JSON.stringify({ Angle: 5, Distance: 5 })]);
      if (dist > 2)
        console.log("outside");
    }
    else
    {
      if (this.labelData[dist][angle] > 0)
        this.router.navigate(['/ProximityDetectionDetailed', JSON.stringify({ Angle: angle, Distance: dist, Unit: this.Parameters.Unit, Threat: this.Parameters.Threat })]);
    }
  }

}
