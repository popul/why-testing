# Why unit testing with [angular.js][angularjs]

- [angular.js][angularjs] boilerplate
- Use ES6 with [babel][babel]
- [Hot reload][hotreload] for components, templates and css
- Isolate CSS styles into components with [CSS Module][cssmodule]
- Packaging with [webpack][webpack]
- [mocha][mocha] **without browser** `npm test`
- [mocha][mocha] in browser `npm run test:debug`
- [mocha][mocha] in console with watch mode `npm run test:watch`
- [mocha][mocha] with code coverage `npm run test:coverage:open` using [nyc][nyc]
- Flux architecture with [ng-redux][ng-redux] ([redux][redux]) and [redux-saga][redux-saga] for business logic and side effects
- Packaging for production in `dist` folder with `npm run build`

# Installation

Clone repository

Install dependencies

```
npm i
```

[angularjs]: https://angularjs.org/
[babel]: https://babeljs.io/
[mocha]: https://mochajs.org/
[hotreload]: https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack
[cssmodule]: https://github.com/css-modules/css-modules
[webpack]: http://webpack.github.io/
[nyc]: https://istanbul.js.org/
[ng-redux]: https://github.com/angular-redux/ng-redux
[redux]: http://redux.js.org/
[redux-saga]: http://yelouafi.github.io/redux-saga/
