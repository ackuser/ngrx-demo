import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Employee } from './../../core/services/employee.model';
import { EmployeeService } from './../../core/services/employee.service';
import * as crudActions from './crud.actions';

@Injectable()
export class CrudEffects {

  constructor(
    private employeeService: EmployeeService,
    private actions$: Actions
  ) { }

  @Effect()
  loadAllEmployeeEffects$: Observable<Action> = this.actions$.pipe(
    ofType<crudActions.CRUDEmployeeLoadRequest>(crudActions.ActionTypes.CRUD_EMPLOYEE_LOAD_REQUEST),
    switchMap(() =>
      this.employeeService.getEmployees().pipe(
        map((employees: Employee[]) => (new crudActions.CRUDEmployeeLoadSuccess(employees))),
        catchError( (error: string) => of(new crudActions.CRUDEmployeeFailure(error)))
      )
    )
  );

  @Effect()
  createEmployeeEffects$: Observable<Action> = this.actions$.pipe(
    ofType<crudActions.CRUDEmployeeCreateRequest>(crudActions.ActionTypes.CRUD_EMPLOYEE_CREATE_REQUEST),
    map((action: crudActions.CRUDEmployeeCreateRequest) => action.payload),
    switchMap((employee: Employee) =>
      this.employeeService.createEmployee(employee).pipe(
        map((responseEmployee: Employee) => (new crudActions.CRUDEmployeeCreateOrUpdateSuccess(responseEmployee))),
        catchError( (error: string) => of(new crudActions.CRUDEmployeeFailure(error)))
      )
    )
  );

  @Effect()
  updateEmployeeEffects$: Observable<Action> = this.actions$.pipe(
    ofType<crudActions.CRUDEmployeeUpdateRequest>(crudActions.ActionTypes.CRUD_EMPLOYEE_UPDATE_REQUEST),
    map((action: crudActions.CRUDEmployeeUpdateRequest) => action.payload),
    switchMap((employee: Employee) =>
      this.employeeService.updateEmployee(employee).pipe(
        map(() => (new crudActions.CRUDEmployeeCreateOrUpdateSuccess(employee))),
        catchError( (error: string) => of(new crudActions.CRUDEmployeeFailure(error)))
      )
    )
  );

 @Effect()
  deleteEmployeeEffects$: Observable<Action> = this.actions$.pipe(
    ofType<crudActions.CRUDEmployeeDeleteRequest>(crudActions.ActionTypes.CRUD_EMPLOYEE_DELETE_REQUEST),
    map((action: crudActions.CRUDEmployeeDeleteRequest) => action.payload),
    switchMap((id: number) =>
      this.employeeService.removeEmployee(id).pipe(
        map(() => (new crudActions.CRUDEmployeeDeleteSuccess(id))),
        catchError( (error: string) => of(new crudActions.CRUDEmployeeFailure(error)))
      )
    )
  );

}
