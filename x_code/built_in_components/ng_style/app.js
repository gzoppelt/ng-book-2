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
var StyleSampleApp = (function () {
    function StyleSampleApp() {
        this.fontSize = 16;
        this.color = "blue";
        this.style = {
            'background-color': '#ccc',
            'border-radius': '50px',
            'height': '30px',
            'width': '30px',
        };
    }
    StyleSampleApp.prototype.apply = function (color, fontSize) {
        this.color = color;
        this.fontSize = fontSize;
    };
    StyleSampleApp = __decorate([
        angular2_1.Component({
            selector: 'style-sample-app'
        }),
        angular2_1.View({
            directives: [angular2_1.NgStyle],
            template: "\n    <div [style.background-color]=\"'yellow'\">\n      Uses fixed yellow background\n    </div>\n\n    <div [ng-style]=\"{color: 'white', 'background-color': 'blue'}\">\n      Uses fixed white text on blue background\n    </div>\n\n    <div>\n      <span [ng-style]=\"{color: 'red'}\" [style.font-size.px]=\"fontSize\">red text</span>\n    </div>\n\n    <div [ng-style]=\"style\"></div>\n\n    <div>\n      <span [ng-style]=\"{color: colorinput.value}\">{{ colorinput.value }} text</span>\n    </div>\n\n    <div [style.background-color]=\"colorinput.value\" style=\"color: white;\">{{ colorinput.value }} background</div>\n\n    <div><input type=\"text\" name=\"color\" value=\"{{color}}\" #colorinput></div>\n    <div><input type=\"text\" name=\"fontSize\" value=\"{{fontSize}}\" #fontinput></div>\n\n    <button (click)=\"apply(colorinput.value, fontinput.value)\">Apply settings</button>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], StyleSampleApp);
    return StyleSampleApp;
})();
angular2_1.bootstrap(StyleSampleApp);
