import { Component, OnInit, Input } from '@angular/core';
import { MapItem } from '../../../../../../_models/mapItem';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'm-threat-event-map',
  templateUrl: './threat-event-map.component.html',
  styleUrls: ['./threat-event-map.component.scss']
})
export class ThreatEventMapComponent implements OnInit {
  @Input() data: MapItem[];
  @Input() index: number = 0;
  centerLAT: number;
  centerLON: number;
  geoJson: GeoJSON.FeatureCollection<GeoJSON.LineString>;
  constructor() { }

  ngOnInit() {
    this.centerLAT = this.data[this.index].center_LAT/10000000;
    this.centerLON = this.data[this.index].center_LON/10000000;
    this.geoJson = {
      'type': 'FeatureCollection',
      'features': []
    };
    var prevDisplayZone = this.data[this.index].points[0].Threat_Zone;
    var coords = [];
    var colorString = "#0000FF";
    for (var i = 0; i < this.data[this.index].points.length; i++) {
      var e = this.data[this.index].points[i];
      if (e.Threat_Zone == prevDisplayZone)
      {
        coords.push([e.LON/10000000,e.LAT/10000000]);
      }
      else {
        if (prevDisplayZone == 1) {
          colorString = "#0000FF";
        } else if (prevDisplayZone == 2) {
          colorString = "#FFFF00";
        } else {
          colorString = "#FF0000";
        }
        coords.push([e.LON/10000000,e.LAT/10000000]);
        var feature = this.generateFeature(coords,colorString);
        this.geoJson.features.push(feature);

        //reset
        coords = [[e.LON/10000000,e.LAT/10000000]];
        prevDisplayZone = e.Threat_Zone;
      }

    }
    this.geoJson.features.push(this.generateFeature(coords,colorString));
  }

  generateFeature(coords: number[][], color: string) {
    var feature: any = {
      'type': 'Feature',
      'properties': {
          'color': color // red
          },
          'geometry': {
              'type': 'LineString',
              'coordinates': coords
          }
      };
    return feature;
  }
}
