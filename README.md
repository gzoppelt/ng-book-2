# ng-book-2
####starting with release numbers####
```
git tag -a v0.0 -m 'Version 0.0'
git push --tags
git describe [--long]
```
###Prerequisites
```
npm install -g typescript
npm install -g tsd
npm install -g live-server
```
cd a2
vi package.json:
    {
      "name": "getting-started",
      "version": "0.0.1",
      "dependencies": {
        "angular2": "2.0.0-alpha.35",
        "es6-module-loader": "^0.16",
        "systemjs": "^0.16",
        "traceur": "0.0.91"
      }
    }
npm install

mkdir <app-folder>
cd <app-folder>
```
###Prepare for TypeScript Compilation
tsconfig.json
{
    "compilerOptions": {
        "target": "ES5",
        "module": "commonjs",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true
    }
}
```
index.html:
```
<!DOCTYPE html>
<html>
<head>
<script src="../node_modules/traceur/bin/traceur-runtime.js"></script>
<script src="../node_modules/es6-module-loader/dist/es6-module-loader.js"></script>
<script src="../node_modules/systemjs/dist/system.src.js"></script>
<script src="../node_modules/angular2/bundles/angular2.dev.js"></script>
</head>
<body>
    <my-app></my-app>
    <script>
        System.import('app');
    </script>
</body>
</html>
```
app.ts
```
import {Component, View, bootstrap} from 'angular2/angular2';
@Component({
  selector: 'my-app'
})
@View({
  template: '<h1 id="output">My First Angular 2 App</h1>'
})
class AppComponent { }
bootstrap(AppComponent);
```
###Compile and Run
```
cd ..
tsc -p <app-folder> -w
live-server --open <app-folder>
```
