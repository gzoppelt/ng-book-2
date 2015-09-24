import {Component, NgFor, View, bootstrap} from 'angular2/angular2';
@Component({
  selector: 'my-app'
})
@View({
    directives: [NgFor],
    template: `
        <h1>Hello World!</h1>
        <ul>
            <li *ng-for="#name of names">Hello {{ name }}</li>
            </ul>
    `
})
class AppComponent {
    names: Array<string>;

    constructor() {
        this.names = ['Cutie', 'Ari', 'Carlos', 'Nate', 'Felippe'];
    }
}

bootstrap(AppComponent);
