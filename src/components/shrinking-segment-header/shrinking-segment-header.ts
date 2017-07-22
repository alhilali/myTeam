import { Component, Input, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'shrinking-segment-header',
  templateUrl: 'shrinking-segment-header.html'
})
export class ShrinkingSegmentHeader {

  @Input('scrollArea') scrollArea: any;
  @Input('headerHeight') headerHeight: number;
  scrollContent: any;

  newHeaderHeight: any;

  constructor(public element: ElementRef, public renderer: Renderer) {

  }

  ngAfterViewInit(){

    this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
    this.scrollContent = this.scrollArea._elementRef.nativeElement.getElementsByClassName('profileBottom')[0];
    this.scrollArea.ionScroll.subscribe((ev) => {
      this.resizeHeader(ev);
    });
    this.scrollArea.ionScrollEnd.subscribe((ev) => {
      if (ev.scrollTop <= 1) this.renderer.setElementStyle(this.scrollContent, 'top', this.newHeaderHeight+116 + 'px');
    })

  }

  resizeHeader(ev){

    ev.domWrite(() => {
      this.newHeaderHeight = this.headerHeight - ev.scrollTop;

      if(this.newHeaderHeight < 0){
        this.newHeaderHeight = 0;
      }

      if (this.newHeaderHeight <= this.headerHeight) {
        this.renderer.setElementStyle(this.element.nativeElement, 'height', this.newHeaderHeight + 'px');
      }
    });

  }

}
