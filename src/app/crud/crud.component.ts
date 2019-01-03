import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from './../in-memory-api/employee.interface';
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

    this.store$.dispatch(new CrudStoreActions.CRUDEmployeeLoadRequest());

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
    this.store$.dispatch(new CrudStoreActions.CRUDEmployeeCreateRequest(employee));
  }

  public onUpdateEmployee(employee: Employee) {
    this.store$.dispatch(new CrudStoreActions.CRUDEmployeeUpdateRequest(employee));
  }

  public onEditEmployee(employee: Employee) {
    this.isEditing = true;
    this.employeeToEdit = employee;
  }

  public onDeleteEmployee(id: number | null) {
    this.store$.dispatch(new CrudStoreActions.CRUDEmployeeDeleteRequest(id));
  }

  public onCancel(isEdit: boolean) {
    this.isEditing = isEdit;
    this.employeeToEdit = null;
  }

}
