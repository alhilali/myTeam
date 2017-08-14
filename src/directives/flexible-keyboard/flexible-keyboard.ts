import { Keyboard } from "@ionic-native/keyboard";
import { Platform, Content } from "ionic-angular";
import { Directive, ElementRef, Renderer, ContentChild } from '@angular/core';

/**
 * Generated class for the FlexibleKeyboardDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[flexible-keyboard]', // Attribute selector
  host: {
    '(tab)': 'contentMouseDown($event)'
  }
})
export class FlexibleKeyboardDirective {
  @ContentChild('content') content: Content;
  inputElement;
  textareaHeight;
  scrollContentElelment: any;
  private footerElement: any;
  private initialTextAreaHeight;
  private millis = 200;
  private scrollTimeout = this.millis + 50;
  private keyboardHideSub;
  private keybaordShowSub;

  constructor(public element: ElementRef, public renderer: Renderer,
    public platform: Platform, public keyboard: Keyboard) {
  }


  ngAfterViewInit() {
    if (this.platform.is('ios')) {
      this.addKeyboardListeners()
    }

    this.scrollContentElelment = this.content.getScrollElement();

    this.footerElement = document.getElementsByTagName('ion-footer')[0];
    this.inputElement = document.getElementsByClassName('textarea')[0];


    this.footerElement.style.cssText = this.footerElement.style.cssText + "transition: all " + this.millis + "ms; -webkit-transition: all " +
      this.millis + "ms; -webkit-transition-timing-function: ease-out; transition-timing-function: ease-out;"

    this.scrollContentElelment.style.cssText = this.scrollContentElelment.style.cssText + "transition: all " + this.millis + "ms; -webkit-transition: all " +
      this.millis + "ms; -webkit-transition-timing-function: ease-out; transition-timing-function: ease-out;"

    this.textareaHeight = Number(this.inputElement.style.height.replace('px', ''));
    this.initialTextAreaHeight = this.textareaHeight;


    this.updateScroll('load', 500)
  }

  addKeyboardListeners() {

    this.keyboardHideSub = this.keyboard.onKeyboardHide().subscribe(() => {
      let newHeight = this.textareaHeight - this.initialTextAreaHeight + 28;
      let marginBottom = newHeight + 'px';
      this.renderer.setElementStyle(this.scrollContentElelment, 'marginBottom', marginBottom);
      this.renderer.setElementStyle(this.footerElement, 'marginBottom', '0px')
    });

    this.keybaordShowSub = this.keyboard.onKeyboardShow().subscribe((e) => {

      let newHeight = (e['keyboardHeight']) + this.textareaHeight - this.initialTextAreaHeight;
      let marginBottom = newHeight + 28 + 'px';
      this.renderer.setElementStyle(this.scrollContentElelment, 'marginBottom', marginBottom);
      this.renderer.setElementStyle(this.footerElement, 'marginBottom', e['keyboardHeight'] + 'px');
      this.updateScroll('keybaord show', this.scrollTimeout);
    });
  }

  contentMouseDown(event) {
    //console.log('blurring input element :- > event type:', event.type);
    this.inputElement.blur();
  }

  updateScroll(from, timeout) {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, timeout);
  }
}
