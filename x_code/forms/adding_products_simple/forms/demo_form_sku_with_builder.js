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
/// <reference path="../typings/angular2/angular2.d.ts" />
var angular2_1 = require("angular2/angular2");
var angular2_2 = require("angular2/angular2");
var DemoFormSkuBuilder = (function () {
    function DemoFormSkuBuilder(fb) {
        this.myForm = fb.group({
            "sku": ["ABC123"]
        });
    }
    DemoFormSkuBuilder.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
    };
    DemoFormSkuBuilder = __decorate([
        angular2_1.Component({
            selector: 'demo-form-sku-builder',
            viewInjector: [angular2_2.FormBuilder]
        }),
        angular2_1.View({
            directives: [angular2_2.formDirectives],
            template: "\n  <div>\n    <h2>Demo Form: Sku with Builder</h2>\n    <form [ng-form-model]=\"myForm\" \n          (submit)=\"onSubmit(myForm.value)\">\n\n      <div class=\"form-group\">\n        <label for=\"skuInput\">SKU</label>\n        <input type=\"text\" \n               class=\"form-control\" \n               id=\"skuInput\" \n               placeholder=\"SKU\"\n               [ng-form-control]=\"myForm.controls['sku']\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [angular2_2.FormBuilder])
    ], DemoFormSkuBuilder);
    return DemoFormSkuBuilder;
})();
exports.DemoFormSkuBuilder = DemoFormSkuBuilder;
