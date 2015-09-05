/// <reference path="typings/angular2/angular2.d.ts" />

import {
  Component,
  View,
  NgNonBindable,
  bootstrap,
} from "angular2/angular2";

@Component({
  selector: 'ng-non-bindable-sample-app'
})
@View({
  directives: [NgNonBindable],
  template: `
  <div>
    {{ content }}
    <span ng-non-bindable>
      <- This is what {{ content }} rendered
    </span>
  </div>
  `
})
class NgNonBindableSampleApp {
  content: string;

  constructor() {
    content = 'Some text';
  }
}

bootstrap(NgNonBindableSampleApp);
