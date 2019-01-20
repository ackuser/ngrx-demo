import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { Employee } from './../../in-memory-api/employee.interface';
import { EmployeeService } from './../../in-memory-api/employee.service';
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

    /* Except GET, for others POST,DELET, UPADTE always use concatMap
   concatMap maintains order in which request comes , queue the request and
   returns the response in order it received whereas mergeMap does n't
   maintain order. Switch will cancel the previous request , takes only
   the latest one, switchMap is safe only for GET method. */
  @Effect()
  createEmployeeEffects$: Observable<Action> = this.actions$.pipe(
    ofType<crudActions.CRUDEmployeeCreateRequest>(crudActions.ActionTypes.CRUD_EMPLOYEE_CREATE_REQUEST),
    map((action: crudActions.CRUDEmployeeCreateRequest) => action.payload),
    concatMap((employee: Employee) =>
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
    concatMap((employee: Employee) =>
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
    concatMap((id: number) =>
      this.employeeService.removeEmployee(id).pipe(
        map(() => (new crudActions.CRUDEmployeeDeleteSuccess(id))),
        catchError( (error: string) => of(new crudActions.CRUDEmployeeFailure(error)))
      )
    )
  );

}
