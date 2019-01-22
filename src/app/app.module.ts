import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { BasicModule } from '@app/basic/basic.module';
import { RootStoreModule } from '@app/root-store';
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
  bootstrap: [AppComponent]
})
export class AppModule { }
