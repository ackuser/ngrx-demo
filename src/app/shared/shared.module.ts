import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CountryCardComponent } from './country-card/country-card.component';
import { CountryTableComponent } from './country-table/country-table.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    CountryCardComponent,
    CountryTableComponent,
    EmployeeFormComponent,
    EmployeeTableComponent
  ],
  exports: [
    ReactiveFormsModule,
    CountryCardComponent,
    CountryTableComponent,
    EmployeeFormComponent,
    EmployeeTableComponent
  ],
})
export class SharedModule { }
