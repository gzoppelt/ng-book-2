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
var SwitchSampleApp = (function () {
    function SwitchSampleApp() {
        this.choice = 1;
    }
    SwitchSampleApp.prototype.nextChoice = function () {
        this.choice += 1;
        if (this.choice > 5) {
            this.choice = 1;
        }
    };
    SwitchSampleApp = __decorate([
        angular2_1.Component({
            selector: 'switch-sample-app'
        }),
        angular2_1.View({
            directives: [angular2_1.NgSwitch, angular2_1.NgSwitchWhen, angular2_1.NgSwitchDefault],
            template: "\n    <div>Current choice is: {{ choice }}</div>\n\n    <ul [ng-switch]=\"choice\">\n      <li *ng-switch-when=\"1\">First choice</li>\n      <li *ng-switch-when=\"2\">Second choice</li>\n      <li *ng-switch-when=\"3\">Third choice</li>\n      <li *ng-switch-when=\"4\">Fourth choice</li>\n      <li *ng-switch-default>Default choice</li>\n    </ul>\n\n    <div style=\"margin-top: 20px;\">\n      <button (click)=\"nextChoice()\">Next choice</button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SwitchSampleApp);
    return SwitchSampleApp;
})();
angular2_1.bootstrap(SwitchSampleApp);
