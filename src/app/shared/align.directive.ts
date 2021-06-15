import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[textAlign]'
})
export class AlignDirective implements OnInit, OnChanges{

  @Input('textAlign') textAlign:string | undefined;
  @Input('textSize') textSize:number | undefined;
  @Input('textColor') textColor:string | undefined;
  @Input('textBg') textBg:string | undefined;
 

  constructor(private ele:ElementRef, private renderer: Renderer2) { }

  
  ngOnInit() {
   // this.ele.nativeElement.style.textAlign = this.textAlign;
    this.renderer.setStyle(this.ele.nativeElement, 'font-size', this.textSize+'px');
    this.renderer.setStyle(this.ele.nativeElement, 'text-align', this.textAlign);
    this.renderer.setStyle(this.ele.nativeElement, 'color', this.textColor);
    this.renderer.setStyle(this.ele.nativeElement, 'background-color', this.textBg);
  }

  ngOnChanges() {
  //  this.ele.nativeElement.style.textAlign = this.textAlign;
    this.renderer.setStyle(this.ele.nativeElement, 'font-size', this.textSize+'px');
    this.renderer.setStyle(this.ele.nativeElement, 'text-align', this.textAlign);
    this.renderer.setStyle(this.ele.nativeElement, 'color', this.textColor);
    this.renderer.setStyle(this.ele.nativeElement, 'background-color', this.textBg);
  }

}
