/// <reference path="typings/angular2/angular2.d.ts" />
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
var angular2_1 = require("angular2/angular2");
var NgNonBindableSampleApp = (function () {
    function NgNonBindableSampleApp() {
        content = 'Some text';
    }
    NgNonBindableSampleApp = __decorate([
        angular2_1.Component({
            selector: 'ng-non-bindable-sample-app'
        }),
        angular2_1.View({
            directives: [angular2_1.NgNonBindable],
            template: "\n  <div>\n    {{ content }}\n    <span ng-non-bindable>\n      <- This is what {{ content }} rendered\n    </span>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NgNonBindableSampleApp);
    return NgNonBindableSampleApp;
})();
angular2_1.bootstrap(NgNonBindableSampleApp);
