import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicModule } from './basic/basic.module';
import { CoreModule } from './core/core.module';
import { RootStoreModule } from './root-store';

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
