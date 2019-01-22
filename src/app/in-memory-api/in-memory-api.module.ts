import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EmployeeInMemoryData } from '@app/in-memory-api/employee-in-memory-data';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

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
