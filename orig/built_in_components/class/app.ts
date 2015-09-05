/// <reference path="typings/angular2/angular2.d.ts" />

import {
  Component,
  View,
  CSSClass,
  bootstrap,
} from "angular2/angular2";

@Component({
  selector: 'style-sample-app'
})
@View({
  directives: [CSSClass],
  template: `
    <div [class]="{bordered: false}">This is never bordered</div>
    <div [class]="{bordered: true}">This is always bordered</div>

    <div [class]="{bordered: isBordered}">
      This is a div with object literal. Border is {{ isBordered ? "ON" : "OFF" }}
    </div>

    <div [class]="classesObj">
      This is a div with object var. Border is {{ classesObj.bordered ? "ON" : "OFF" }}
    </div>

    <div [class.bordered]="isBordered">
      This is a div with <code>[class.&lt;class-name&gt;]</code>. Border is {{ isBordered ? "ON" : "OFF" }}
    </div>

    <button (click)="toggleBorder()">Toggle</button>

    <div class="selectors">
      <div>
        <input type="checkbox"
               [checked]="classList.indexOf('blue') > -1"
               (click)="toggleClass('blue')">
        <span>Blue</span>
      </div>

      <div>
        <input type="checkbox"
               [checked]="classList.indexOf('round') > -1"
               (click)="toggleClass('round')">
        <span>Round</span>
      </div>
    </div>

    <div class="base" [class]="['blue', 'round']">
      This will always have a blue background and
      round corners
    </div>

    <div class="base" [class]="classList">
      This is {{ classList.indexOf('blue') > -1 ? "" : "NOT" }} blue
      and {{ classList.indexOf('round') > -1 ? "" : "NOT" }} round
    </div>
  `
})
class ClassSampleApp {
  isBordered: boolean;
  classesObj: Object;
  classList: Array<string>;

  constructor() {
    this.isBordered = true;
    this.classList = ['blue', 'round'];
    this.toggleBorder();
  }

  toggleBorder() {
    this.isBordered = !this.isBordered;
    this.classesObj = {
      bordered: this.isBordered
    };
  }

  toggleClass(cssClass) {
    var pos = this.classList.indexOf(cssClass);
    if (pos > -1) {
      this.classList.splice(pos, 1);
    } else {
      this.classList.push(cssClass)
    }
  }
}

bootstrap(ClassSampleApp);
