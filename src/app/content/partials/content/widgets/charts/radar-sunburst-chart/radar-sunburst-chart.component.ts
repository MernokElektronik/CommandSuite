import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'm-radar-sunburst-chart',
  templateUrl: './radar-sunburst-chart.component.html',
  styleUrls: ['./radar-sunburst-chart.component.scss']
})
export class RadarSunburstChartComponent implements OnInit {
  @Input() 
  colors: string[][] = [
    ["red","red","red","red","red","red","red","red","red","red","red","red"],
    ["yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow"],
    ["blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],
  ];
  @Input() 
  opacity: number[][] = [
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
  ];
  @Input() 
  labels: string[][] = [
    ["0","0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0","0"],
  ];
  @Input()
  sizeWidth: number = 300;
  @Input()
  sizeHeight: number = 300;
  @Output()
  public buttonClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();


  @ViewChild('myCanvas') canvasRef: ElementRef;
  constructor() { }

  ngOnInit() {
    this.canvasRef.nativeElement.width = this.sizeWidth;
    this.canvasRef.nativeElement.height = this.sizeHeight;

    let ctx: CanvasRenderingContext2D =
    this.canvasRef.nativeElement.getContext('2d');
    var slices = 2 / 12;
    var xHalf = this.canvasRef.nativeElement.width/2;
    if (this.canvasRef.nativeElement.height < this.canvasRef.nativeElement.width)
      xHalf = this.canvasRef.nativeElement.height/2;
    var incrSize = (xHalf - 25) / 3;

    ctx.strokeStyle="white";
    ctx.lineWidth=3;
    for (var i=0;i<12;i++){
      ctx.fillStyle=this.colors[0][i];
      ctx.globalAlpha = this.opacity[0][i];
      ctx.beginPath();
      ctx.arc(xHalf,xHalf,25,(slices*(i-2)-(slices/2))*Math.PI,(slices*((i-2)+1)-(slices/2))*Math.PI);
      ctx.arc(xHalf,xHalf,25+incrSize,(slices*((i-2)+1)-(slices/2))*Math.PI,(slices*(i-2)-(slices/2))*Math.PI,true);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }
    
    for (var i=0;i<12;i++){
      ctx.fillStyle=this.colors[1][i];
      ctx.globalAlpha = this.opacity[1][i];
      ctx.beginPath();
      ctx.arc(xHalf,xHalf,25+incrSize,(slices*(i-2)-(slices/2))*Math.PI,(slices*((i-2)+1)-(slices/2))*Math.PI);
      ctx.arc(xHalf,xHalf,25+(incrSize*2),(slices*((i-2)+1)-(slices/2))*Math.PI,(slices*(i-2)-(slices/2))*Math.PI,true);
      ctx.closePath();
      ctx.stroke();
      ctx.fill(); 
    }
    
    for (var i=0;i<12;i++){
      ctx.fillStyle=this.colors[2][i];
      ctx.globalAlpha = this.opacity[2][i];
      ctx.beginPath();
      ctx.arc(xHalf,xHalf,25+(incrSize*2),(slices*(i-2)-(slices/2))*Math.PI,(slices*((i-2)+1)-(slices/2))*Math.PI);
      ctx.arc(xHalf,xHalf,25+(incrSize*3),(slices*((i-2)+1)-(slices/2))*Math.PI,(slices*(i-2)-(slices/2))*Math.PI,true);
      ctx.closePath();
      ctx.stroke();
      ctx.fill(); 
    }
    ctx.globalAlpha = 1;

    ctx.font="bold 18px Arial";
    for (var i=0;i<12;i++){
      ctx.fillStyle="black";	
      ctx.textAlign="center";
      var label = "";
      if (this.labels[0][i] != "0") {
        label = this.labels[0][i];
      }
      ctx.fillText(label,
        xHalf + ((incrSize/2)+25) * Math.cos(Math.PI * (((30*i)-15)-45) / 180.0),
        xHalf + ((incrSize/2)+25) * Math.sin(Math.PI * (((30*i)-15)-45) / 180.0)); 
    }
    
    for (var i=0;i<12;i++){
      ctx.fillStyle="black";	
      ctx.textAlign="center";
      var label = "";
      if (this.labels[1][i] != "0") {
        label = this.labels[1][i];
      }
      ctx.fillText(label,
        xHalf + ((incrSize/2)+incrSize+25) * Math.cos(Math.PI * (((30*i)-15)-45) / 180.0),
        xHalf + ((incrSize/2)+incrSize+25) * Math.sin(Math.PI * (((30*i)-15)-45) / 180.0)); 
    }
    
    for (var i=0;i<12;i++){
      ctx.fillStyle="black";	
      ctx.textAlign="center";
      var label = "";
      if (this.labels[2][i] != "0") {
        label = this.labels[2][i];
      }
      ctx.fillText(label,
        xHalf + ((incrSize/2)+(incrSize*2)+25) * Math.cos(Math.PI * (((30*i)-15)-45) / 180.0),
        xHalf + ((incrSize/2)+(incrSize*2)+25) * Math.sin(Math.PI * (((30*i)-15)-45) / 180.0)); 
    }
  }

  
}
