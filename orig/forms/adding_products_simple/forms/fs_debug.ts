/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, bootstrap, View} from "angular2/angular2";
import {formDirectives, FormBuilder, ControlGroup, Control, NgIf} from "angular2/angular2";
import {Validators} from 'angular2/angular2';

@Component({
  selector: 'fs-debug',
  properties: ['target']
})
@View({
  template: `
  <pre>
    {{json(target)}}
  </pre>
  `
})
export class FSDebug {
  target: any;

  json(o) {
    var result;
    var cache = [];
    // via http://stackoverflow.com/questions/11616630/json-stringify-avoid-typeerror-converting-circular-structure-to-json
    result = JSON.stringify(o, function(key, value) {
      if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      return value;
    }, 2);
    cache = null; // Enable garbage collection
    return result;
  }
}
