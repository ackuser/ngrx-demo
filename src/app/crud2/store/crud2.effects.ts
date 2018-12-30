import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Employee } from './../../core/services/employee.model';
import { EmployeeService } from './../../core/services/employee.service';
import * as crud2Actions from './crud2.actions';

@Injectable()
export class Crud2Effects {

  constructor(
    private employeeService: EmployeeService,
    private actions$: Actions
  ) { }

  @Effect()
  loadAllEmployeeEffects$: Observable<Action> = this.actions$.pipe(
    ofType<crud2Actions.CRUD2EmployeeLoadRequest>(crud2Actions.ActionTypes.CRUD2_EMPLOYEE_LOAD_REQUEST),
    switchMap(() =>
      this.employeeService.getEmployees().pipe(
        map((employees: Employee[]) => (new crud2Actions.CRUD2EmployeeLoadSuccess(employees))),
        catchError( (error: string) => of(new crud2Actions.CRUD2EmployeeFailure(error)))
      )
    )
  );

  @Effect()
  createEmployeeEffects$: Observable<Action> = this.actions$.pipe(
    ofType<crud2Actions.CRUD2EmployeeCreateRequest>(crud2Actions.ActionTypes.CRUD2_EMPLOYEE_CREATE_REQUEST),
    map((action: crud2Actions.CRUD2EmployeeCreateRequest) => action.payload),
    switchMap((employee: Employee) =>
      this.employeeService.createEmployee(employee).pipe(
        map((responseEmployee: Employee) => (new crud2Actions.CRUD2EmployeeCreateOrUpdateSuccess(responseEmployee))),
        catchError( (error: string) => of(new crud2Actions.CRUD2EmployeeFailure(error)))
      )
    )
  );

  @Effect()
  updateEmployeeEffects$: Observable<Action> = this.actions$.pipe(
    ofType<crud2Actions.CRUD2EmployeeUpdateRequest>(crud2Actions.ActionTypes.CRUD2_EMPLOYEE_UPDATE_REQUEST),
    map((action: crud2Actions.CRUD2EmployeeUpdateRequest) => action.payload),
    switchMap((employee: Employee) =>
      this.employeeService.updateEmployee(employee).pipe(
        map(() => (new crud2Actions.CRUD2EmployeeCreateOrUpdateSuccess(employee))),
        catchError( (error: string) => of(new crud2Actions.CRUD2EmployeeFailure(error)))
      )
    )
  );

 @Effect()
  deleteEmployeeEffects$: Observable<Action> = this.actions$.pipe(
    ofType<crud2Actions.CRUD2EmployeeDeleteRequest>(crud2Actions.ActionTypes.CRUD2_EMPLOYEE_DELETE_REQUEST),
    map((action: crud2Actions.CRUD2EmployeeDeleteRequest) => action.payload),
    switchMap((id: number) =>
      this.employeeService.removeEmployee(id).pipe(
        map(() => (new crud2Actions.CRUD2EmployeeDeleteSuccess(id))),
        catchError( (error: string) => of(new crud2Actions.CRUD2EmployeeFailure(error)))
      )
    )
  );

}
