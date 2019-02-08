# Angular Ngrx Demo

In this demo repo, we'll see by examples how to use NgRx with Angular to manage application state.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6

## Webpack Bundle Analysis and Statistics

This repository is integrated with packtracker.io, which provids webpack bundle analysis and statistics on every pull request basis and establish performance budgets for your asset profile. To view the webpack bundle analysis and statistics, visit [packtracker.io](https://app.packtracker.io/organizations/86)

**Table of contents:**

1. [Prerequisites and Installation](#prerequisites-and-installation)
2. [Quick Start](#quick-start)
3. [Demo UI](#demo-ui)
4. [Build Tasks and Commands](#build-tasks-and-commands)
5. [Changelog](#changelog)
6. [References](#references)

## Prerequisites and Installation

Library | Version | Notes
:-------|:--------:|-------
[Node](https://nodejs.org/) | 10.9.0 | Recommended NodeJS version
[NPM](https://nodejs.org/) |6.5.0 | Recommended NPM version
[Angular](https://angular.io/) | ~7.1.x | JavaScript-based open-source front-end SPA framework
[Angular CLI](https://github.com/angular/angular-cli) | 7.1.x | Set of development tools for Angular
[RxJS](https://rxjs-dev.firebaseapp.com/)| ~6.3.3 | JavaScript library for reactive programming using Observables
[@ngrx/store](https://ngrx.io/)| ~7.0.0 | Manage reactive state for Angular
[@ngrx/effects](https://ngrx.io/)| ~7.0.0 | Implement side-effects like http requests, logging, notifications
[@ngrx/store-devtools](https://ngrx.io/)| ~7.0.0 |  Development tool to monitor and debug NGRX actions, state, effects and also enables a powerful time-travelling debugger
[@ngrx/entity](https://ngrx.io/)| ~7.0.0 | Manage state and CRUD operations for object collection and array
[@ngrx/router-store](https://ngrx.io/)| ~7.0.0 | Connects the Angular Router to ngrx store to manage state for angular router
[ngrx-store-freeze](https://github.com/brandonroberts/ngrx-store-freeze)| ~0.2.4 | Meta-reducer that prevents state from being mutated
[angular-in-memory-web-api](https://www.npmjs.com/package/angular-in-memory-web-api)| ~0.8.0 | An in-memory web api for Angular demos and tests that emulates CRUD operations over a RESTy API.

## Quick Start

To launch the demo application, you can try below steps yourself on your computer, or launch the application on StackBlitz, by [clicking here](https://stackblitz.com/github/kumaran-is/ngrx-demo).

1. Clone repository and checkout the `master` branch

    ```bash
    git clone https://github.com/kumaran-is/ngrx-demo.git
    cd demos
    git checkout master
    cd ngrx-demo
    ```

1. Install NPM dependencies

    ```bash
    npm install
    ```

1. Run linting and unit test

    ```bash
    ng lint
    ng test
    ```

1. Start application in development mode

    ```bash
    ng serve -o
    ```

1. Application opens in browser [http://localhost:4200](http://localhost:4200)

## Build Tasks and Commands

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Demo UI

The goal of this demo application is to show-case on how you can use NgRx in your Angular application to manage application state.

Demo UI screen is organized into 7 pages with separate menus in the top navigation bar. Each screen will show case common usecase by examples as mentioned below.

 1. **Demo 1** - To show-case basic usage of NgRx to publish and read state from NgRx Store

 1. **Demo 2** - To show-case how to lazy load state for lazy loaded feature modules

 1. **Demo 3** - To show-case how to deal with API calls using `@ngrx/effects`

 1. **Demo 4** - To show-case how to implement Search functionality using `Angular Reactive Forms` with NgRx

 1. **Demo 5** - To show-case how to implement Search functionality using `@ngrx/entity`

 1. **Demo 6** - To show-case how to implement CRUD operations using `@ngrx/entity`

 1. **Demo 7** - To show-case how to optimize and encapsulate NgRx coding using `Facade pattern`

 Also added following features to the demo applications at global level:

 1. Implemented meta-reducer to clear store when user logs out.

 1. Implemented meta-reducer to log actions/state events to the browser console for debugging

 1. Added third-party meta-reducer library [ngrx-store-freeze@~0.2.4](https://github.com/brandonroberts/ngrx-store-freeze) to prevent state from being mutated

 1. Added util function [action-unique.ts](https://github.disney.com/WDPR-RA/demos/blob/develop/angular-ngrx-demo/src/app/root-store/action-unique.ts) to ensure that each action is unique. This prevents any double actions being dispatched.

 1. Added `ngrx/router-store` to bind router states like route param, route queryParam and route url to store. Also added selectors to query route param, route queryParam and route url from store

 1. Integrated Redux DevTools provided by NGRX library `@ngrx/store-devtools` to monitor and debug store in non-production environments using [Google Chrome Redux DevTools Plugin](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) or [Firefox Redux DevTools Extension](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/).

 1. Implemented smart(container) and dump(presentation) component pattern with NgRx to optimize page rendering using Angular `OnPush` ChangeDetectionStrategy

## Changelog

[Follow this link for change history](./CHANGELOG.md)

## References

- [https://ngrx.io/](https://ngrx.io/)

- [https://redux.js.org/introduction/three-principles](https://redux.js.org/introduction/three-principles)

- [https://blog.angularindepth.com/search?q=ngrx](https://blog.angularindepth.com/search?q=ngrx)

- [https://medium.com/search?q=ngrx](https://medium.com/search?q=ngrx)
