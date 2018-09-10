import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ThreatsService } from '../../../../_services/threats.service';
import { MapItem } from '../../../../_models/mapItem';
import { when } from 'q';

@Component({
  selector: 'm-proximity-detection-detailed',
  templateUrl: './proximity-detection-detailed.component.html',
  styleUrls: ['./proximity-detection-detailed.component.scss']
})


export class ProximityDetectionDetailedComponent implements OnInit {

  constructor(private threatsService: ThreatsService, private route: ActivatedRoute, private router: Router) { }

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
  allSelected: boolean = false;
  
  testData: MapItem[];
  testData2: MapItem[];
  stats = {
    Red: 0,
    Blue: 0,
    Yellow: 0,
    Selected: 0
  }
  doughnutColors = [{
    backgroundColor: []
  }]
  dougnutValues = []
  dougnutLabels = []

  Parameters: any = {
    Distance: 5,
    Angle: 5,
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
  displayedColumns: string[] = ['time', 'VID', 'sector', 'zone', 'distance', 'UID', 'Type', 'Direction', 'Speed', 'tUID', 'tVID', 'tType', 'tDirection', 'tSpeed', 'Map'];
  ngOnInit() {
    for (var i = 0; i < 3; i++){
      for (var o = 0; o < 3; o++){
        this.labelData[i][o] = 0;
        this.opacityData[i][o] = 0.5;
      }
    }
    this.stats = {
      Red: 0,
      Blue: 0,
      Yellow: 0,
      Selected: 0
    }

    this.Parameters = JSON.parse(this.route.snapshot.params['d']);

    console.log(this.Parameters);
    this.allSelected = (this.Parameters.Distance == 5 && this.Parameters.Angle == 5);

    if (this.Parameters.Unit.UID == "All") {
      this.threatsService.getThreats().subscribe(mapItems => { this.testData = mapItems as MapItem[] });
      this.threatsService.getThreatsBySector(this.Parameters.Angle, this.Parameters.Distance).subscribe(mapItems => { this.testData2 = mapItems as MapItem[] });
    }
    else
    {
      this.threatsService.getThreatsByUnit(this.Parameters.Unit.UID).subscribe(mapItems => { this.testData = mapItems as MapItem[] });
      this.threatsService.getThreatsByUnitSector(this.Parameters.Unit.UID, this.Parameters.Angle, this.Parameters.Distance).subscribe(mapItems => { this.testData2 = mapItems as MapItem[] });
    }
    
    console.log(this.testData2);
    if (!this.allSelected)
      this.opacityData[this.Parameters.Distance][this.Parameters.Angle] = 1;

    for (let threat of this.testData) {
      for (let point of threat.points) {
        this.labelData[point.Threat_Zone - 1][point.Threat_Sector - 1]++;
        if (this.allSelected)
          this.opacityData[point.Threat_Zone - 1][point.Threat_Sector - 1] = 1;
        if (point.Threat_Zone - 1 == this.Parameters.Distance && point.Threat_Sector - 1 == this.Parameters.Angle)
          this.stats.Selected++;
        else {
          if (point.Threat_Zone == 1)
            this.stats.Red++;
          else if (point.Threat_Zone == 2)
            this.stats.Yellow++;
          else
            this.stats.Blue++;
        }


      }
    }
    this.dougnutValues.push(this.stats.Red);
    this.dougnutValues.push(this.stats.Yellow);
    this.dougnutValues.push(this.stats.Blue);
    switch (this.Parameters.Distance) {
      case 0:
        this.doughnutColors[0].backgroundColor= [
          'rgba(255,255,0,0.5)', 
          'rgba(0,0,255,0.5)',
          'rgba(255,0,0,0.5)', 
          'rgba(255,0,0,1)'
        ];
        this.dougnutValues = [
          this.stats.Yellow,
          this.stats.Blue,
          this.stats.Red,
          this.stats.Selected
        ];
        this.dougnutLabels = [
          'Warning',
          'Presence',
          'Critical',
          'Selected'
        ];
        break;
      case 1:
        this.doughnutColors[0].backgroundColor= [
          'rgba(255,0,0,0.5)',
          'rgba(0,0,255,0.5)',
          'rgba(255,255,0,0.5)',
          'rgba(255,255,0,1)'
        ];
        this.dougnutValues = [
          this.stats.Red,
          this.stats.Blue,
          this.stats.Yellow,
          this.stats.Selected
        ];
        this.dougnutLabels = [
          'Critical',
          'Presence',
          'Warning',
          'Selected'
        ];
        break;
      case 2:
        this.doughnutColors[0].backgroundColor= [
          'rgba(255,0,0,0.5)',
          'rgba(255,255,0,0.5)',
          'rgba(0,0,255,0.5)',
          'rgba(0,0,255,1)'
        ];
        this.dougnutValues = [
          this.stats.Red,
          this.stats.Yellow,
          this.stats.Blue,
          this.stats.Selected
        ];
        this.dougnutLabels = [
          'Critical',
          'Warning',
          'Presence',
          'Selected'
        ];
        break;
      case 5:
        this.doughnutColors[0].backgroundColor = [
          'rgba(255,0,0,1)', 
          'rgba(255,255,0,1)', 
          'rgba(0,0,255,1)'
        ];
        this.dougnutValues = [
          this.stats.Red,
          this.stats.Yellow,
          this.stats.Blue
        ];
        this.dougnutLabels = [
          'Critical',
          'Warning',
          'Presence'
        ];
        break;
    }


  }


  mapIconClicked(UID: number, BID: number, Timestamp:number) {
    this.router.navigate(['/ProximityDetectionMap', JSON.stringify({ UID: UID, BID: BID, Timestamp: Timestamp })]);
  }
}
