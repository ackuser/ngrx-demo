import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryCardComponent } from '@shared/country-card/country-card.component';
import { CountryTableComponent } from '@shared/country-table/country-table.component';
import { EmployeeFormComponent } from '@shared/employee-form/employee-form.component';
import { EmployeeTableComponent } from '@shared/employee-table/employee-table.component';
import { ConfigTableComponent } from './config-table/config-table.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ConfigTableComponent,
    CountryCardComponent,
    CountryTableComponent,
    EmployeeFormComponent,
    EmployeeTableComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ConfigTableComponent,
    CountryCardComponent,
    CountryTableComponent,
    EmployeeFormComponent,
    EmployeeTableComponent
  ]
})
export class SharedModule { }
