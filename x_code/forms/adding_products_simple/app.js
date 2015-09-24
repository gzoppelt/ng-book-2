if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require("angular2/angular2");
var demo_form_sku_1 = require("forms/demo_form_sku");
var demo_form_sku_with_builder_1 = require("forms/demo_form_sku_with_builder");
var demo_form_with_validations_shorthand_1 = require("forms/demo_form_with_validations_shorthand");
var demo_form_with_validations_explicit_1 = require("forms/demo_form_with_validations_explicit");
var demo_form_with_custom_validations_1 = require("forms/demo_form_with_custom_validations");
var demo_form_with_events_1 = require("forms/demo_form_with_events");
var demo_form_ng_model_1 = require("forms/demo_form_ng_model");
var FormsDemoApp = (function () {
    function FormsDemoApp() {
    }
    FormsDemoApp = __decorate([
        angular2_1.Component({
            selector: 'forms-demo-app'
        }),
        angular2_1.View({
            directives: [demo_form_sku_1.DemoFormSku,
                demo_form_sku_with_builder_1.DemoFormSkuBuilder,
                demo_form_with_validations_shorthand_1.DemoFormWithValidationsShorthand,
                demo_form_with_validations_explicit_1.DemoFormWithValidationsExplicit,
                demo_form_with_custom_validations_1.DemoFormWithCustomValidations,
                demo_form_with_events_1.DemoFormWithEvents,
                demo_form_ng_model_1.DemoFormNgModel],
            template: "\n  <div>\n    <demo-form-ng-model></demo-form-ng-model>\n    <demo-form-with-events></demo-form-with-events>\n    <demo-form-with-custom-validations></demo-form-with-custom-validations>\n    <demo-form-with-validations-shorthand></demo-form-with-validations-shorthand>\n    <demo-form-with-validations-explicit></demo-form-with-validations-explicit>\n    <demo-form-sku-builder></demo-form-sku-builder>\n    <demo-form-sku></demo-form-sku>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FormsDemoApp);
    return FormsDemoApp;
})();
angular2_1.bootstrap(FormsDemoApp);
