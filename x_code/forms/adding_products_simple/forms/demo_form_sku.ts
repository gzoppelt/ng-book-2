/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, bootstrap, View} from "angular2/angular2";
import {formDirectives, FormBuilder, ControlGroup} from "angular2/angular2";

@Component({
  selector: 'demo-form-sku'
})
@View({
  directives: [formDirectives],
  template: `
  <div>
    <h2>Demo Form: Sku</h2>
    <form #f="form"
          (submit)="onSubmit(f.value)">

      <div class="form-group">
        <label for="skuInput">SKU</label>
        <input type="text" 
               class="form-control" 
               id="skuInput" 
               placeholder="SKU"
               ng-control="sku">
      </div>

      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
  `
})
export class DemoFormSku {
  onSubmit(value) {
    console.log('you submitted value: ', value);
  }
}
