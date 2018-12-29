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
    ofType<crudActions.CRUDEmployeeLoad>(crudActions.ActionTypes.CRUD_EMPLOYEE_LOAD),
    switchMap(() =>
      this.employeeService.getEmployees().pipe(
        map((employees: Employee[]) => (new crudActions.CRUDEmployeeLoadSuccess(employees))),
        catchError( (error: string) => of(new crudActions.CRUDEmployeeFailure(error)))
      )
    )
  );

  @Effect()
  createEmployeeEffects$: Observable<Action> = this.actions$.pipe(
    ofType<crudActions.CRUDEmployeeCreate>(crudActions.ActionTypes.CRUD_EMPLOYEE_CREATE),
    map((action: crudActions.CRUDEmployeeCreate) => action.payload),
    switchMap((employee: Employee) =>
      this.employeeService.createEmployee(employee).pipe(
        map((responseEmployee: Employee) => (new crudActions.CRUDEmployeeCreateOrUpdateSuccess(responseEmployee))),
        catchError( (error: string) => of(new crudActions.CRUDEmployeeFailure(error)))
      )
    )
  );

  @Effect()
  updateEmployeeEffects$: Observable<Action> = this.actions$.pipe(
    ofType<crudActions.CRUDEmployeeUpdate>(crudActions.ActionTypes.CRUD_EMPLOYEE_UPDATE),
    map((action: crudActions.CRUDEmployeeUpdate) => action.payload),
    switchMap((employee: Employee) =>
      this.employeeService.updateEmployee(employee).pipe(
        map(() => (new crudActions.CRUDEmployeeCreateOrUpdateSuccess(employee))),
        catchError( (error: string) => of(new crudActions.CRUDEmployeeFailure(error)))
      )
    )
  );

 @Effect()
  deleteEmployeeEffects$: Observable<Action> = this.actions$.pipe(
    ofType<crudActions.CRUDEmployeeDelete>(crudActions.ActionTypes.CRUD_EMPLOYEE_DELETE),
    map((action: crudActions.CRUDEmployeeDelete) => action.payload),
    switchMap((id: number) =>
      this.employeeService.removeEmployee(id).pipe(
        map(() => (new crudActions.CRUDEmployeeDeleteSuccess(id))),
        catchError( (error: string) => of(new crudActions.CRUDEmployeeFailure(error)))
      )
    )
  );

}
