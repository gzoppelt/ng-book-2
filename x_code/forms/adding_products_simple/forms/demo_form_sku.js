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
var DemoFormSku = (function () {
    function DemoFormSku() {
    }
    DemoFormSku.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
    };
    DemoFormSku = __decorate([
        angular2_1.Component({
            selector: 'demo-form-sku'
        }),
        angular2_1.View({
            directives: [angular2_2.formDirectives],
            template: "\n  <div>\n    <h2>Demo Form: Sku</h2>\n    <form #f=\"form\"\n          (submit)=\"onSubmit(f.value)\">\n\n      <div class=\"form-group\">\n        <label for=\"skuInput\">SKU</label>\n        <input type=\"text\" \n               class=\"form-control\" \n               id=\"skuInput\" \n               placeholder=\"SKU\"\n               ng-control=\"sku\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DemoFormSku);
    return DemoFormSku;
})();
exports.DemoFormSku = DemoFormSku;
