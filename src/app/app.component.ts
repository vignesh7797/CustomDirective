import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  
  title = 'CustomDirective';

  text:string = 'Hello World.!';
  size:number[]=[4,8,10,12,14,18,20,24,30,36,42,48,60,67,75];
  
  align:string = "center";
  textSize:number =20;
  textColor="#156425";
  textBg="#dae1f4"

  //style:any[]=['center', 12, '#156425', '#fff' ]; // [ 'Align', 'SIze', 'textColor', 'textBackground' ]

  onAlign(v: string){
    this.align = v;
     //this.style[0] = v;
  }

  ngOnChanges() {
   // this.style=[this.align, this.textSize, this.textColor, this.textBg]
  }


}
