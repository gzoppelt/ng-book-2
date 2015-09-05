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
var NgForSampleApp = (function () {
    function NgForSampleApp() {
        this.cities = ['Miami', 'Sao Paulo', 'New York'];
        this.people = [
            { name: 'Anderson', age: 35, city: 'Sao Paulo' },
            { name: 'John', age: 12, city: 'Miami' },
            { name: 'Peter', age: 22, city: 'New York' }
        ];
        this.peopleByCity = [
            {
                city: 'Miami',
                people: [
                    { name: 'John', age: 12 },
                    { name: 'Angel', age: 22 }
                ]
            },
            {
                city: 'Sao Paulo',
                people: [
                    { name: 'Anderson', age: 35 },
                    { name: 'Felipe', age: 36 }
                ]
            }
        ];
    }
    ;
    NgForSampleApp = __decorate([
        angular2_1.Component({
            selector: 'ng-for-sample-app'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            template: "\n  <div *ng-for=\"#c of cities\">{{ c }}</div>\n\n  <hr>\n\n  <table>\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Age</th>\n        <th>City</th>\n      </tr>\n    </thead>\n    <tr *ng-for=\"#p of people\">\n      <td>{{ p.name }}</td>\n      <td>{{ p.age }}</td>\n      <td>{{ p.city }}</td>\n    </tr>\n  </table>\n\n  <hr>\n\n  <div *ng-for=\"#item of peopleByCity\">\n    <div>{{ item.city }}</div>\n\n    <table>\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Age</th>\n        </tr>\n      </thead>\n      <tr *ng-for=\"#p of item.people\">\n        <td>{{ p.name }}</td>\n        <td>{{ p.age }}</td>\n      </tr>\n    </table>\n  </div>\n\n  <hr>\n\n  <div *ng-for=\"#c of cities; #num = index\">\n    {{ num+1 }} - {{ c }}\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NgForSampleApp);
    return NgForSampleApp;
})();
angular2_1.bootstrap(NgForSampleApp);
