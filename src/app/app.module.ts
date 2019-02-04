import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { BasicModule } from '@app/basic/basic.module';
import { RootStoreModule } from '@app/root-store';
import { AppInitStoreFacade, initApplication } from '@app/root-store/app-init/app-init-store.facade';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RootStoreModule,
    BasicModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApplication,
      deps: [AppInitStoreFacade],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
