import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HeaderComponent } from './header/header.component';
import { EmployeeInMemoryData } from './services/employee-in-memory-data';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    // Always import the HttpClientInMemoryWebApiModule after the HttpClientModule
    // 500ms delay to all data requests to simulate round-trip latency.
    HttpClientInMemoryWebApiModule.forRoot(EmployeeInMemoryData,  { delay: 500 }),
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: []
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
