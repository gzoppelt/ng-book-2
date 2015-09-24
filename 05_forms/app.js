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
/// <reference path="../node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var angular2_2 = require('angular2/angular2');
var DemoFormSku = (function () {
    function DemoFormSku() {
    }
    DemoFormSku.prototype.onSubmit = function (value) {
        console.log('Form 1 - value: ', value);
    };
    DemoFormSku = __decorate([
        angular2_1.Component({ selector: 'demo-form-sku' }),
        angular2_1.View({
            directives: [angular2_2.FORM_DIRECTIVES],
            template: "\n    <section class=\"new-link\">\n        <h2>Demo Form 1: SKU</h2>\n        <form #f=\"form\" (submit)=\"onSubmit(f.value)\">\n            <div class=\"form-group\">\n                <label for=\"skuInput\">SKU</label>\n                <input  type=\"text\"\n                        class=\"form-control\"\n                        id=\"skuInput\"\n                        placeholder=\"SKU\"\n                        ng-control=\"sku\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        </form>\n    </section>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], DemoFormSku);
    return DemoFormSku;
})();
var DemoFormSkuBuilder = (function () {
    function DemoFormSkuBuilder(fb) {
        this.myForm = fb.group({
            "sku": ["AB123"]
        });
    }
    DemoFormSkuBuilder.prototype.onSubmit = function (value) {
        console.log('Form 2 - value: ', value);
    };
    DemoFormSkuBuilder = __decorate([
        angular2_1.Component({
            selector: 'demo-form-sku-builder',
            viewBindings: [angular2_2.FormBuilder],
        }),
        angular2_1.View({
            directives: [angular2_2.FORM_DIRECTIVES],
            template: "\n    <section class=\"new-link\">\n        <h2>Demo Form 2: Sku with Builder</h2>\n        <form   [ng-form-model]='myForm'\n                (submit)=\"onSubmit(myForm.value)\">\n            <div class=\"form-group\">\n                <label for=\"skuInput\">SKU</label>\n                <input  txpe=\"text\"\n                        class=\"form-control\"\n                        id=\"skuInput\"\n                        placeholder=\"SKU\"\n                        [ng-form-control]=\"myForm.controls['sku']\">\n\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        </form>\n    </section>\n    "
        }), 
        __metadata('design:paramtypes', [angular2_2.FormBuilder])
    ], DemoFormSkuBuilder);
    return DemoFormSkuBuilder;
})();
exports.DemoFormSkuBuilder = DemoFormSkuBuilder;
var DemoFormSkuValidator = (function () {
    function DemoFormSkuValidator(fb) {
        this.myForm = fb.group({
            "sku": ["", angular2_2.Validators.required]
        });
        this.sku = this.myForm.controls['sku'];
        this.sku.valueChanges.observer({
            next: function (value) { console.log('Form 3 - sku  changed to ', value); }
        });
        this.myForm.valueChanges.observer({
            next: function (value) { console.log('Form 3 - form changed to ', value); }
        });
    }
    DemoFormSkuValidator.prototype.onSubmit = function (value) {
        console.log('Form 3 - value: ', value);
    };
    DemoFormSkuValidator = __decorate([
        angular2_1.Component({
            selector: 'demo-form-sku-validator',
            viewBindings: [angular2_2.FormBuilder],
        }),
        angular2_1.View({
            directives: [angular2_2.FORM_DIRECTIVES, angular2_1.NgIf],
            template: "\n    <section class=\"new-link\">\n        <h2>Demo Form 3: Validation</h2>\n        <form   [ng-form-model]='myForm'\n                (submit)=\"onSubmit(myForm.value)\">\n            <div    class=\"form-group\"\n                    [class.has-error]=\"!sku.valid && sku.touched\">\n                <label for=\"skuInput\">SKU</label>\n                <input  txpe=\"text\"\n                        class=\"form-control\"\n                        id=\"skuInput\"\n                        placeholder=\"SKU\"\n                        [ng-form-control]=\"sku\">\n                <div *ng-if=\"!sku.valid\" class=\"bg-warning\">\n                    SKU is invalid.\n                </div>\n                <div *ng-if=\"sku.hasError('required')\" class=\"bg-warning\">\n                    SKU is required.\n                </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n            Watch out for the changes in the console! (F12)\n        </form>\n    </section>\n    "
        }), 
        __metadata('design:paramtypes', [angular2_2.FormBuilder])
    ], DemoFormSkuValidator);
    return DemoFormSkuValidator;
})();
exports.DemoFormSkuValidator = DemoFormSkuValidator;
var DemoFormSkuShorthand = (function () {
    function DemoFormSkuShorthand(fb) {
        this.myForm = fb.group({
            "sku": ["AB", angular2_2.Validators.compose([angular2_2.Validators.required, skuValidator])]
        });
    }
    DemoFormSkuShorthand.prototype.onSubmit = function (value) {
        console.log('Form 4 - value: ', value);
    };
    DemoFormSkuShorthand = __decorate([
        angular2_1.Component({
            selector: 'demo-form-sku-shorthand',
            viewBindings: [angular2_2.FormBuilder],
        }),
        angular2_1.View({
            directives: [angular2_2.FORM_DIRECTIVES, angular2_1.NgIf],
            template: "\n    <section class=\"new-link\">\n        <h2>Form 4: Validation-Shorthand</h2>\n        <form   [ng-form-model]='myForm'\n                (submit)=\"onSubmit(myForm.value)\">\n            <div    class=\"form-group\"\n                    [class.has-error]=\"!myForm.find('sku').valid && myForm.find('sku').touched\">\n                <label for=\"skuInput\">SKU</label>\n                <input  txpe=\"text\"\n                        class=\"form-control\"\n                        id=\"skuInput\"\n                        placeholder=\"SKU\"\n                        #sku=\"form\"\n                        [ng-form-control]=\"myForm.controls['sku']\">\n                <div *ng-if=\"!sku.control.valid\" class=\"bg-warning\">\n                    SKU is invalid.\n                </div>\n                <div *ng-if=\"sku.control.hasError('required')\" class=\"bg-warning\">\n                    SKU is required.\n                </div>\n                <div *ng-if=\"sku.control.hasError('invalidSku')\" class=\"bg-warning\">\n                    SKU must begin with 123.\n                </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n        </form>\n    </section>\n    "
        }), 
        __metadata('design:paramtypes', [angular2_2.FormBuilder])
    ], DemoFormSkuShorthand);
    return DemoFormSkuShorthand;
})();
exports.DemoFormSkuShorthand = DemoFormSkuShorthand;
function skuValidator(control) {
    if (!control.value.match(/^123/)) {
        return { invalidSku: true };
    }
}
var DemoFormNgmodel = (function () {
    function DemoFormNgmodel(fb) {
        this.myForm = fb.group({
            "productName": ["AB", angular2_2.Validators.required]
        });
    }
    DemoFormNgmodel.prototype.onSubmit = function (value) {
        console.log('Form 5 - value: ', value);
    };
    DemoFormNgmodel = __decorate([
        angular2_1.Component({
            selector: 'demo-form-ngmodel',
            viewBindings: [angular2_2.FormBuilder],
        }),
        angular2_1.View({
            directives: [angular2_2.FORM_DIRECTIVES, angular2_1.NgIf],
            template: "\n    <section class=\"new-link\">\n        <h2>Demo Form 5: ng-model</h2>\n        <form   [ng-form-model]='myForm'\n                (submit)=\"onSubmit(myForm.value)\">\n            <div class=\"form-group\">\n                <label for=\"productNameInput\">Product Name</label>\n                <input  txpe=\"text\"\n                        class=\"form-control\"\n                        id=\"productNameInput\"\n                        placeholder=\"Product Name\"\n                        [ng-form-control]=\"myForm.find('productName')\"\n                        [(ng-model)]=\"productName\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n            The product name is: <b>{{ productName }}</b>\n        </form>\n    </section>\n    "
        }), 
        __metadata('design:paramtypes', [angular2_2.FormBuilder])
    ], DemoFormNgmodel);
    return DemoFormNgmodel;
})();
exports.DemoFormNgmodel = DemoFormNgmodel;
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        angular2_1.Component({ selector: 'app' }),
        angular2_1.View({
            directives: [
                DemoFormSku,
                DemoFormSkuBuilder,
                DemoFormSkuValidator,
                DemoFormSkuShorthand,
                DemoFormNgmodel
            ],
            template: "\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <demo-form-sku></demo-form-sku>\n            </div>\n            <div class=\"col-md-6\">\n                <demo-form-sku-builder></demo-form-sku-builder>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <demo-form-sku-validator></demo-form-sku-validator>\n            </div>\n            <div class=\"col-md-6\">\n                <demo-form-sku-shorthand></demo-form-sku-shorthand>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <demo-form-ngmodel></demo-form-ngmodel>\n            </div>\n            <div class=\"col-md-6\">\n            </div>\n        </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map