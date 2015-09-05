/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, bootstrap, View} from "angular2/angular2";
import {formDirectives, FormBuilder, ControlGroup, Control, NgIf} from "angular2/angular2";
import {Validators} from 'angular2/angular2';

@Component({
  selector: 'demo-form-with-events',
  viewInjector: [FormBuilder]
})
@View({
  directives: [formDirectives, NgIf],
  template: `
  <div>
    <h2>Demo Form: with events</h2>
    <form [ng-form-model]="myForm" 
          (submit)="onSubmit(myForm.value)">

      <div class="form-group"
          [class.has-error]="!sku.valid && sku.touched">
        <label for="skuInput">SKU</label>
        <input type="text" 
               class="form-control" 
               id="skuInput" 
               placeholder="SKU"
               [ng-form-control]="sku">
         <div *ng-if="!sku.valid" 
           class="bg-warning">SKU is invalid</div>
         <div *ng-if="sku.hasError('required')"
           class="bg-warning">SKU must begin with <tt>123</tt></div>
      </div>

      <div *ng-if="!myForm.valid"
        class="bg-warning">Form is invalid</div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
  `
})
export class DemoFormWithEvents {
  myForm: ControlGroup;
  sku: Control;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      "sku":  ["", Validators.required]
    });

    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.observer({
      next: (value) => {
        console.log("sku changed to: ", value);
      }
    })

    this.myForm.valueChanges.observer({
      next: (value) => {
        console.log("form changed to: ", value);
      }
    })

  }

  onSubmit(value) {
    console.log('you submitted value: ', value);
  }
}
