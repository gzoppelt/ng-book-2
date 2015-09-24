/// <reference path="../node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />
import {
    bootstrap,
    Component,
    NgFor,
    NgIf,
    View
} from 'angular2/angular2';

import {
    FORM_DIRECTIVES,
    FormBuilder,
    ControlGroup,
    Control,
    Validators
} from 'angular2/angular2'


@Component({ selector: 'demo-form-sku' })
@View({
    directives: [FORM_DIRECTIVES],
    template: `
    <section class="new-link">
        <h2>Demo Form 1: SKU</h2>
        <form #f="form" (submit)="onSubmit(f.value)">
            <div class="form-group">
                <label for="skuInput">SKU</label>
                <input  type="text"
                        class="form-control"
                        id="skuInput"
                        placeholder="SKU"
                        ng-control="sku">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </section>
    `
})
class DemoFormSku {
    onSubmit(value) {
        console.log('Form 1 - value: ', value)
    }
}

@Component({
    selector: 'demo-form-sku-builder',
    viewBindings: [FormBuilder],
})
@View({
    directives: [FORM_DIRECTIVES],
    template: `
    <section class="new-link">
        <h2>Demo Form 2: Sku with Builder</h2>
        <form   [ng-form-model]='myForm'
                (submit)="onSubmit(myForm.value)">
            <div class="form-group">
                <label for="skuInput">SKU</label>
                <input  txpe="text"
                        class="form-control"
                        id="skuInput"
                        placeholder="SKU"
                        [ng-form-control]="myForm.controls['sku']">

            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </section>
    `
})
export class DemoFormSkuBuilder {
    myForm: ControlGroup;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            "sku": ["AB123"]
        });
    }

    onSubmit(value) {
        console.log('Form 2 - value: ', value)
    }
}

@Component({
    selector: 'demo-form-sku-validator',
    viewBindings: [FormBuilder],
})
@View({
    directives: [FORM_DIRECTIVES, NgIf],
    template: `
    <section class="new-link">
        <h2>Demo Form 3: Validation</h2>
        <form   [ng-form-model]='myForm'
                (submit)="onSubmit(myForm.value)">
            <div    class="form-group"
                    [class.has-error]="!sku.valid && sku.touched">
                <label for="skuInput">SKU</label>
                <input  txpe="text"
                        class="form-control"
                        id="skuInput"
                        placeholder="SKU"
                        [ng-form-control]="sku">
                <div *ng-if="!sku.valid" class="bg-warning">
                    SKU is invalid.
                </div>
                <div *ng-if="sku.hasError('required')" class="bg-warning">
                    SKU is required.
                </div>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
            Watch out for the changes in the console! (F12)
        </form>
    </section>
    `
})
export class DemoFormSkuValidator {
    myForm: ControlGroup;
    sku: Control;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            "sku": ["", Validators.required]
        });
        this.sku = this.myForm.controls['sku'];

        this.sku.valueChanges.observer({
            next: (value) => { console.log('Form 3 - sku  changed to ', value); }
        })

        this.myForm.valueChanges.observer({
            next: (value) => { console.log('Form 3 - form changed to ', value); }
        })
    }



    onSubmit(value) {
        console.log('Form 3 - value: ', value);
    }

}


@Component({
    selector: 'demo-form-sku-shorthand',
    viewBindings: [FormBuilder],
})
@View({
    directives: [FORM_DIRECTIVES, NgIf],
    template: `
    <section class="new-link">
        <h2>Form 4: Validation-Shorthand</h2>
        <form   [ng-form-model]='myForm'
                (submit)="onSubmit(myForm.value)">
            <div    class="form-group"
                    [class.has-error]="!myForm.find('sku').valid && myForm.find('sku').touched">
                <label for="skuInput">SKU</label>
                <input  txpe="text"
                        class="form-control"
                        id="skuInput"
                        placeholder="SKU"
                        #sku="form"
                        [ng-form-control]="myForm.controls['sku']">
                <div *ng-if="!sku.control.valid" class="bg-warning">
                    SKU is invalid.
                </div>
                <div *ng-if="sku.control.hasError('required')" class="bg-warning">
                    SKU is required.
                </div>
                <div *ng-if="sku.control.hasError('invalidSku')" class="bg-warning">
                    SKU must begin with 123.
                </div>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </section>
    `
})
export class DemoFormSkuShorthand {
    myForm: ControlGroup;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            "sku": ["AB", Validators.compose([Validators.required, skuValidator])]
        });
    }

    onSubmit(value) {
        console.log('Form 4 - value: ', value);
    }
}
function skuValidator(control) {
    if(!control.value.match(/^123/)) {
        return {invalidSku: true}
    }
}


@Component({
    selector: 'demo-form-ngmodel',
    viewBindings: [FormBuilder],
})
@View({
    directives: [FORM_DIRECTIVES, NgIf],
    template: `
    <section class="new-link">
        <h2>Demo Form 5: ng-model</h2>
        <form   [ng-form-model]='myForm'
                (submit)="onSubmit(myForm.value)">
            <div class="form-group">
                <label for="productNameInput">Product Name</label>
                <input  txpe="text"
                        class="form-control"
                        id="productNameInput"
                        placeholder="Product Name"
                        [ng-form-control]="myForm.find('productName')"
                        [(ng-model)]="productName">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
            The product name is: <b>{{ productName }}</b>
        </form>
    </section>
    `
})
export class DemoFormNgmodel {
    myForm: ControlGroup;
    productName: string;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            "productName": ["AB", Validators.required]
        });
    }

    onSubmit(value) {
        console.log('Form 5 - value: ', value);
    }
}

@Component({ selector: 'app' })
@View({
    directives: [
        DemoFormSku,
        DemoFormSkuBuilder,
        DemoFormSkuValidator,
        DemoFormSkuShorthand,
        DemoFormNgmodel
    ],
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <demo-form-sku></demo-form-sku>
            </div>
            <div class="col-md-6">
                <demo-form-sku-builder></demo-form-sku-builder>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <demo-form-sku-validator></demo-form-sku-validator>
            </div>
            <div class="col-md-6">
                <demo-form-sku-shorthand></demo-form-sku-shorthand>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <demo-form-ngmodel></demo-form-ngmodel>
            </div>
            <div class="col-md-6">
            </div>
        </div>
    </div>
    `
})
class AppComponent {}

bootstrap(AppComponent);
