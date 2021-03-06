<a name="v2.6.0"></a>
## 2.6.0 (2019-02-09)

#### Bug Fixes

* NA

#### Features

* Updated to show total count of search results in search demo [[PR 5](https://github.com/kumaran-is/ngrx-demo/pull/5)]

#### Breaking Changes

* NA

<a name="v2.5.0"></a>
## 2.5.0 (2019-02-09)

#### Bug Fixes

* NA

#### Features

* Added [ngx-build-modern](https://github.com/manfredsteyer/ngx-build-plus/blob/master/ngx-build-modern/README.md) to Create optimized bundles for modern browsers and legacy bundles for older browsers. Make the browser load the right set of bundles [[PR 4](https://github.com/kumaran-is/ngrx-demo/pull/4)]

* Added [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) to deploy Angular app to GitHub page [[PR 4](https://github.com/kumaran-is/ngrx-demo/pull/4)]

#### Breaking Changes

* NA

<a name="v2.4.0"></a>
## 2.4.0 (2019-02-07)

#### Bug Fixes

* NA

#### Features

* Integrated with packtracker.io [[PR 3](https://github.com/kumaran-is/ngrx-demo/pull/3)]

* Added [ngx-build-plus](https://github.com/manfredsteyer/ngx-build-plus) to extend the default Angular CLI's Build webpack config without ejecting by providing a custom partial webpack config 1webpack.extra.js` to add configuration for packtracker.io. Updated angular.json with ngx-build-plus. [[PR 3](https://github.com/kumaran-is/ngrx-demo/pull/3)]

#### Breaking Changes

* NA

<a name="v2.3.0"></a>
## 2.3.0 (2019-02-04)

#### Bug Fixes
* Fixed search page and side-effects page, by removing in-memory angular loading from app.module [[PR 2](https://github.com/kumaran-is/ngrx-demo/pull/2)]

#### Features

* NA

#### Breaking Changes
* NA


<a name="v2.2.0"></a>
## 2.2.0 (2019-02-03)

#### Bug Fixes
* NA

#### Features

* Initialized Angular App with NgRx & APP_INITIALIZER. Loaded  application config into NgRx Store [[PR 1](https://github.com/kumaran-is/ngrx-demo/pull/1)]
* Updated the demo with NgRx Life cycle hooks - ROOT_EFFECTS_INIT
, OnInitEffects and OnRunEffects [[PR 1](https://github.com/kumaran-is/ngrx-demo/pull/1)]

#### Breaking Changes
* NA

<a name="v2.1.0"></a>
## 2.1.0 (2018-12-31)

#### Bug Fixes
* NA

#### Features

* Updated the demo with NgRx Entity usecases
* Updated the demo with Facade pattern
* Implemented meta-reducer to clear store when user logs out.
* Implemented meta-reducer to log actions/state events to the browser console for debugging
* Added third-party meta-reducer library ngrx-store-freeze@~0.2.4 to prevent state from being mutated
* Added util function action-unique.ts to ensure that each action is unique. This prevents any double actions being dispatched.
* Added ngrx/router-store to bind router states like route param, route queryParam and route url to store. Also added selectors to query route param, route queryParam and route url from store
* Integrated Redux DevTools provided by NGRX library @ngrx/store-devtools to monitor and debug store in non-production environments using Google Chrome Redux DevTools Plugin or Firefox Redux DevTools Extension.
* Implemented smart(container) and dump(presentation) component pattern with NgRx to optimize page rendering using Angular OnPush ChangeDetectionStrategy

#### Breaking Changes
* NA


<a name="v2.0.0"></a>
## 2.0.0 (2018-12-24)

#### Bug Fixes
* NA

#### Features

* Upgraded NgRx from v6.1.x to v7.x.x.

**Note:** 👉For demo with NgRx v6.x code changes, refer the branch [ngrx-6.1](https://github.com/kumaran-is/ngrx-demo/tree/ngrx-6.1)

#### Breaking Changes
* NA

<a name="v1.0.0"></a>
## 1.0.0 (2018-12-22)

#### Bug Fixes
* NA

#### Features

* Added Angular v7.1.x demo application to show case AngularNGRX Store, actions, states and reducers using NgRx v6.0.0
* Organized stores/states based on features, followed best practices
* Implemented stores for lazy-loaded feature modules
* Implemented NGRX Effects to manage side-effects caused by external call like HTTP  
* Integrated reactive forms with  NGRX actions
* Implement selectors to query the store

#### Breaking Changes
* NA


<a name="v0.0.1"></a>
## 0.0.1 (2018-12-09)

#### Bug Fixes
* NA

#### Features
* Initial project structure generated  with  [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

#### Breaking Changes
* NA
