import { Injectable } from '@angular/core';
import * as crudActions from '@app/crud/store/crud.actions';
import { Employee } from '@app/in-memory-api/employee.interface';
import { EmployeeService } from '@app/in-memory-api/employee.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';

@Injectable()
export class CrudEffects {
  constructor(
    private employeeService: EmployeeService,
    private actions$: Actions
  ) {}

  loadAllEmployeeEffects$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<crudActions.CRUDEmployeeLoadRequest>(
        crudActions.ActionTypes.CRUD_EMPLOYEE_LOAD_REQUEST
      ),
      switchMap(() =>
        this.employeeService.getEmployees().pipe(
          map(
            (employees: Employee[]) =>
              new crudActions.CRUDEmployeeLoadSuccess(employees)
          ),
          catchError((error: string) =>
            of(new crudActions.CRUDEmployeeFailure(error))
          )
        )
      )
    )
  );

  /* Except GET, for others POST,DELET, UPADTE always use concatMap
   concatMap maintains order in which request comes , queue the request and
   returns the response in order it received whereas mergeMap does n't
   maintain order. SwitchMap can cause race conditions, SwitchMap will cancel the previous request , takes only
   the latest one, switchMap is safe only for GET method.

   Now using a concatMap can slow down things because it executes them
   sequentially. If you don’t care about order, I’d suggest a mergeMap.
   It will preserve all the requests but execute them right away rather
   than waiting for the previous to succeed
   For More detail refer: https://medium.com/@amcdnl/your-ngrx-effects-are-probably-wrong-574460868005
   */
  createEmployeeEffects$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<crudActions.CRUDEmployeeCreateRequest>(
        crudActions.ActionTypes.CRUD_EMPLOYEE_CREATE_REQUEST
      ),
      map((action: crudActions.CRUDEmployeeCreateRequest) => action.payload),
      concatMap((employee: Employee) =>
        this.employeeService.createEmployee(employee).pipe(
          map(
            (responseEmployee: Employee) =>
              new crudActions.CRUDEmployeeCreateOrUpdateSuccess(
                responseEmployee
              )
          ),
          catchError((error: string) =>
            of(new crudActions.CRUDEmployeeFailure(error))
          )
        )
      )
    )
  );

  updateEmployeeEffects$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<crudActions.CRUDEmployeeUpdateRequest>(
        crudActions.ActionTypes.CRUD_EMPLOYEE_UPDATE_REQUEST
      ),
      map((action: crudActions.CRUDEmployeeUpdateRequest) => action.payload),
      concatMap((employee: Employee) =>
        this.employeeService.updateEmployee(employee).pipe(
          map(
            () => new crudActions.CRUDEmployeeCreateOrUpdateSuccess(employee)
          ),
          catchError((error: string) =>
            of(new crudActions.CRUDEmployeeFailure(error))
          )
        )
      )
    )
  );

  deleteEmployeeEffects$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<crudActions.CRUDEmployeeDeleteRequest>(
        crudActions.ActionTypes.CRUD_EMPLOYEE_DELETE_REQUEST
      ),
      map((action: crudActions.CRUDEmployeeDeleteRequest) => action.payload),
      concatMap((id: number) =>
        this.employeeService.removeEmployee(id).pipe(
          map(() => new crudActions.CRUDEmployeeDeleteSuccess(id)),
          catchError((error: string) =>
            of(new crudActions.CRUDEmployeeFailure(error))
          )
        )
      )
    )
  );
}
