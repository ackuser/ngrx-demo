import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './../core/services/employee.model';
import { Crud2StoreFacade } from './store';

@Component({
  selector: 'app-crud2',
  templateUrl: './crud2.component.html',
  styleUrls: ['./crud2.component.css']
})
export class Crud2Component implements OnInit {

  public isEditing = false;
  public employees$: Observable<Employee[]>;
  public errorMessage$: Observable<string>;
  public isLoading$: Observable<boolean>;
  public employeeToEdit: Employee;

  constructor(private crud2StoreFacade: Crud2StoreFacade) { }

  ngOnInit() {
    this.crud2StoreFacade.loadAllEmployee();
    this.isLoading$ = this.crud2StoreFacade.isLoading$;
    this.employees$ = this.crud2StoreFacade.employees$;
    this.errorMessage$ = this.crud2StoreFacade.errorMessage$;
  }

  public onAddEmployee(employee: Employee) {
    this.crud2StoreFacade.addEmployee(employee);
  }

  public onUpdateEmployee(employee: Employee) {
    this.crud2StoreFacade.updateEmployee(employee);
  }

  public onEditEmployee(employee: Employee) {
    this.isEditing = true;
    this.employeeToEdit = employee;
  }

  public onDeleteEmployee(id: number | null) {
    this.crud2StoreFacade.deleteEmployee(id);
  }

  public onCancel(isEdit: boolean) {
    this.isEditing = isEdit;
    this.employeeToEdit = null;
  }

}
