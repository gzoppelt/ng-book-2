/// <reference path="typings/angular2/angular2.d.ts" />
import { Component, bootstrap, View } from "angular2/angular2";
import {formDirectives, FormBuilder, Validators, ControlGroup} from "angular2/angular2";
import {Product} from "product";
import {DemoFormSku} from "forms/demo_form_sku"
import {DemoFormSkuBuilder} from "forms/demo_form_sku_with_builder"
import {DemoFormWithValidationsShorthand} from "forms/demo_form_with_validations_shorthand"
import {DemoFormWithValidationsExplicit} from "forms/demo_form_with_validations_explicit"
import {DemoFormWithCustomValidations} from "forms/demo_form_with_custom_validations"
import {DemoFormWithEvents} from "forms/demo_form_with_events"
import {DemoFormNgModel} from "forms/demo_form_ng_model"

@Component({
  selector: 'forms-demo-app'
})
@View({
  directives: [DemoFormSku, 
               DemoFormSkuBuilder, 
               DemoFormWithValidationsShorthand, 
               DemoFormWithValidationsExplicit,
               DemoFormWithCustomValidations,
               DemoFormWithEvents,
               DemoFormNgModel],
  template: `
  <div>
    <demo-form-ng-model></demo-form-ng-model>
    <demo-form-with-events></demo-form-with-events>
    <demo-form-with-custom-validations></demo-form-with-custom-validations>
    <demo-form-with-validations-shorthand></demo-form-with-validations-shorthand>
    <demo-form-with-validations-explicit></demo-form-with-validations-explicit>
    <demo-form-sku-builder></demo-form-sku-builder>
    <demo-form-sku></demo-form-sku>
  </div>
  `
})
class FormsDemoApp {
}

bootstrap(FormsDemoApp);
