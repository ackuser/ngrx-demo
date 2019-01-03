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

* Upgraded NgRx from v6.1.x to v7.x.x
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
