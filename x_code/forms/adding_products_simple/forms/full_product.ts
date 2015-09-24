/// <reference path="typings/angular2/angular2.d.ts" />
import { Component, bootstrap, View } from "angular2/angular2";
import {formDirectives, FormBuilder, Validators, ControlGroup} from "angular2/angular2";
import {Product} from "product";

@Component({
  selector: 'forms-demo-app'
})
@View({
  directives: [formDirectives],
  template: `
  <div>
    <h2>Add New Product</h2>
    <form [control-group]="form">
      <div class="form-group">
        <label for="skuInput">SKU</label>
        <input type="text" class="form-control" id="skuInput" placeholder="SKU">
      </div>

      <div class="form-group">
        <label for="productNameInput">Product Name</label>
        <input type="text" class="form-control" id="productNameInput" placeholder="Product Name">
      </div>

      <div class="form-group">
        <label for="productPriceInput">Product Price</label>
        <input type="text" class="form-control" id="productPriceInput" placeholder="Product Price">
      </div>

      <div class="row">
        <div class="col-md-6">
          <label for="productDescriptionInput">Product Description</label>
          <textarea class="form-control" id="productDescriptionInput" placeholder="Product Description"></textarea>
        </div>
        <div class="col-md-6">
          <div class="checkbox">
            <label>
              <input type="checkbox"> Published</input>
            </label>
          </div>

          <button type="submit" class="btn btn-default">Submit</button>
        </div>
      </div>

    </form>
  </div>
  `
})
class FormsDemoApp {
  form: ControlGroup;

  constructor() {
    this.form = new ControlGroup();
  }
}

bootstrap(FormsDemoApp);
