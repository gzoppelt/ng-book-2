import {Component, NgFor, View, bootstrap} from 'angular2/angular2';
@Component({
  selector: 'my-app'
})
@View({
    directives: [NgFor],
    template: `
        <h1>Chapter about how Angular Works</h1>
        
    `
})
class AppComponent {
    names: Array<string>;

    constructor() {
        this.names = ['Cutie', 'Ari', 'Carlos', 'Nate', 'Felippe'];
    }
}

bootstrap(AppComponent);
