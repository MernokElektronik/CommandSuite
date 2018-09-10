import { threatEvent } from './threatEvent';
import { Unit } from './unit';
import { of } from 'rxjs';

export class MapItem {
    unit: Unit;
    timestamp: number;
    center_LAT: number;
    center_LON: number;
    points: threatEvent[];

    constructor(Unit,Timestamp,Center_LAT,Center_LON,Points) {
        this.unit = Unit;
        this.center_LAT = Center_LAT;
        this.center_LON = Center_LON;
        this.timestamp = Timestamp;
        this.points = Points;
    }

    public getPoints() {
        return this.points;
    }

    public getDate() {
        return new Date(this.timestamp*1000);
    }

    public getSunBurstData() {
        var opacityData: number[][] = [
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
            [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        ];
        var labelData: number[][] = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];

        for (let point of this.points) {
            labelData[point.Threat_Zone - 1][point.Threat_Sector - 1]++;
            opacityData[point.Threat_Zone - 1][point.Threat_Sector - 1] = 1;
        }
        
        return {label:labelData,opacity:opacityData};
    };
}