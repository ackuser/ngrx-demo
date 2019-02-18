import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
  // Disable those windows console logs in production
  if (window) {
    window.console.log = () => {};
    window.console.warn = () => {};
    window.console.debug = () => {};
    window.console.info = () => {};
    window.console.trace = () => {};
  }
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
