/// <reference path="/home/g/code/a2/node_modules/angular2/bundles/typings/angular2/angular2.d.ts">

import {
    Component,
    View,
    bootstrap
} from "angular2/angular2"

@Component({selector: 'hello-world'})
@View({template: '<div>Hello world</div>'})
class HellWorld {

}
bootstrap(HelloWorld);
