/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, bootstrap, View} from "angular2/angular2";
import {formDirectives, FormBuilder, ControlGroup, Control, NgIf} from "angular2/angular2";
import {Validators} from 'angular2/angular2';

@Component({
  selector: 'demo-form-with-validations-shorthand',
  viewInjector: [FormBuilder]
})
@View({
  directives: [formDirectives, NgIf],
  template: `
  <div>
    <h2>Demo Form: with validations (shorthand)</h2>
    <form [ng-form-model]="myForm" 
          (submit)="onSubmit(myForm.value)">

      <div class="form-group"
          [class.has-error]="!myForm.find('sku').valid && myForm.find('sku').touched">
        <label for="skuInput">SKU</label>
        <input type="text" 
               class="form-control" 
               id="skuInput" 
               placeholder="SKU"
               #sku="form"
               [ng-form-control]="myForm.controls['sku']">
         <div *ng-if="!sku.control.valid" 
           class="bg-warning">SKU is invalid</div>
         <div *ng-if="sku.control.hasError('required')"
           class="bg-warning">SKU is required</div>
      </div>

      <div *ng-if="!myForm.valid"
        class="bg-warning">Form is invalid</div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
  `
})
export class DemoFormWithValidationsShorthand {
  myForm: ControlGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      "sku":  ["", Validators.required]
    });
  }

  onSubmit(value) {
    console.log('you submitted value: ', value);
  }
}
