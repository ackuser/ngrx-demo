import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from './../core/services/employee.model';
import * as fromRoot from './../root-store';
import { CrudStoreActions, CrudStoreSelectors } from './store';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  public isEditing = false;
  public employees$: Observable<Employee[]>;
  public errorMessage$: Observable<string>;
  public isLoading$: Observable<boolean>;
  public employeeToEdit: Employee;

  constructor(
    private store$: Store<fromRoot.State>
  ) { }

  ngOnInit() {

    this.store$.dispatch(new CrudStoreActions.CRUDEmployeeLoad());

    this.isLoading$ = this.store$.pipe(
      select(CrudStoreSelectors.selectCrudLoadingStatus)
    );

    this.employees$ = this.store$.pipe(
      select(CrudStoreSelectors.selectCrudAllEmpolyees)
    );

    this.errorMessage$ = this.store$.pipe(
      select(CrudStoreSelectors.selectCrudError)
    );
  }

  public onAddEmployee(employee: Employee) {
    employee.id = null;
    this.store$.dispatch(new CrudStoreActions.CRUDEmployeeCreate(employee));
  }

  public onUpdateEmployee(employee: Employee) {
    this.store$.dispatch(new CrudStoreActions.CRUDEmployeeUpdate(employee));
  }

  public onEditEmployee(employee: Employee) {
    this.isEditing = true;
    this.employeeToEdit = employee;
  }

  public onDeleteEmployee(id: number | null) {
    this.store$.dispatch(new CrudStoreActions.CRUDEmployeeDelete(id));
  }

  public onCancel(isEdit: boolean) {
    this.isEditing = isEdit;
    this.employeeToEdit = null;
  }

}
