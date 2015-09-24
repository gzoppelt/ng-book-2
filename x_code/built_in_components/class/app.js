/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var ClassSampleApp = (function () {
    function ClassSampleApp() {
        this.isBordered = true;
        this.classList = ['blue', 'round'];
        this.toggleBorder();
    }
    ClassSampleApp.prototype.toggleBorder = function () {
        this.isBordered = !this.isBordered;
        this.classesObj = {
            bordered: this.isBordered
        };
    };
    ClassSampleApp.prototype.toggleClass = function (cssClass) {
        var pos = this.classList.indexOf(cssClass);
        if (pos > -1) {
            this.classList.splice(pos, 1);
        }
        else {
            this.classList.push(cssClass);
        }
    };
    ClassSampleApp = __decorate([
        angular2_1.Component({
            selector: 'style-sample-app'
        }),
        angular2_1.View({
            directives: [angular2_1.CSSClass],
            template: "\n    <div [class]=\"{bordered: false}\">This is never bordered</div>\n    <div [class]=\"{bordered: true}\">This is always bordered</div>\n\n    <div [class]=\"{bordered: isBordered}\">\n      This is a div with object literal. Border is {{ isBordered ? \"ON\" : \"OFF\" }}\n    </div>\n\n    <div [class]=\"classesObj\">\n      This is a div with object var. Border is {{ classesObj.bordered ? \"ON\" : \"OFF\" }}\n    </div>\n\n    <div [class.bordered]=\"isBordered\">\n      This is a div with <code>[class.&lt;class-name&gt;]</code>. Border is {{ isBordered ? \"ON\" : \"OFF\" }}\n    </div>\n\n    <button (click)=\"toggleBorder()\">Toggle</button>\n\n    <div class=\"selectors\">\n      <div>\n        <input type=\"checkbox\"\n               [checked]=\"classList.indexOf('blue') > -1\"\n               (click)=\"toggleClass('blue')\">\n        <span>Blue</span>\n      </div>\n\n      <div>\n        <input type=\"checkbox\"\n               [checked]=\"classList.indexOf('round') > -1\"\n               (click)=\"toggleClass('round')\">\n        <span>Round</span>\n      </div>\n    </div>\n\n    <div class=\"base\" [class]=\"['blue', 'round']\">\n      This will always have a blue background and\n      round corners\n    </div>\n\n    <div class=\"base\" [class]=\"classList\">\n      This is {{ classList.indexOf('blue') > -1 ? \"\" : \"NOT\" }} blue\n      and {{ classList.indexOf('round') > -1 ? \"\" : \"NOT\" }} round\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ClassSampleApp);
    return ClassSampleApp;
})();
angular2_1.bootstrap(ClassSampleApp);
