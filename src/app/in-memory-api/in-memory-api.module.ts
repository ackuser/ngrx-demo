import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeeInMemoryData } from './employee-in-memory-data';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
     // Always import the HttpClientInMemoryWebApiModule after the HttpClientModule
    // 500ms delay to all data requests to simulate round-trip latency.
    HttpClientInMemoryWebApiModule.forFeature(EmployeeInMemoryData,  { delay: 500 }),
  ]
})
export class InMemoryApiModule { }
