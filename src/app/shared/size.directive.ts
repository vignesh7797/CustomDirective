import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSize]'
})
export class SizeDirective implements OnInit, OnChanges {

  @Input('appSize') textSize:number | undefined;

  constructor(private ele:ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //this.ele.nativeElement.style.fontSize = this.textSize;
    this.renderer.setStyle(this.ele.nativeElement, 'font-size', this.textSize+'px');
  }

  ngOnChanges() {
    //this.ele.nativeElement.style.fontSize = this.textSize;
    this.renderer.setStyle(this.ele.nativeElement, 'font-size', this.textSize+'px');
    console.log(this.textSize, this.ele.nativeElement.style.fontSize);
  }

}
