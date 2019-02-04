import { Employee } from '@app/in-memory-api/employee.interface';
import { isActionNameUnique } from '@app/root-store';
import { Action } from '@ngrx/store';

// TypeScript enum’s are immutable
export enum ActionTypes {
  CRUD_EMPLOYEE_LOAD_REQUEST = '[CRUD Page] Load Employee Request',
  CRUD_EMPLOYEE_LOAD_SUCCESS = '[CRUD Page] Load Employee Success',
  CRUD_EMPLOYEE_CREATE_REQUEST = '[CRUD Page] Create Employee Request',
  CRUD_EMPLOYEE_UPDATE_REQUEST = '[CRUD Page] Update Employee Request',
  CRUD_EMPLOYEE_CREATE_OR_UPDATE_SUCCESS = '[CRUD Page] Create or Update Employee Success',
  CRUD_EMPLOYEE_DELETE_REQUEST = '[CRUD Page] Delete Employee Request',
  CRUD_EMPLOYEE_DELETE_SUCCESS = '[CRUD Page] Delete Employee Success',
  CRUD_EMPLOYEE_FAILURE = '[CRUD Page] Employee Failure'
}

// To ensure NgRX actions have unique names across the application.
// This prevents any duplicate actions being dispatched.
isActionNameUnique(ActionTypes);
export class CRUDEmployeeLoadRequest implements Action {
  readonly type = ActionTypes.CRUD_EMPLOYEE_LOAD_REQUEST;
  constructor() {}
}

export class CRUDEmployeeLoadSuccess implements Action {
  readonly type = ActionTypes.CRUD_EMPLOYEE_LOAD_SUCCESS;
  constructor(public payload: Employee[]) {}
}

export class CRUDEmployeeCreateRequest implements Action {
  readonly type = ActionTypes.CRUD_EMPLOYEE_CREATE_REQUEST;
  constructor(public payload: Employee) {}
}

export class CRUDEmployeeUpdateRequest implements Action {
  readonly type = ActionTypes.CRUD_EMPLOYEE_UPDATE_REQUEST;
  constructor(public payload: Employee) {}
}

export class CRUDEmployeeCreateOrUpdateSuccess implements Action {
  readonly type = ActionTypes.CRUD_EMPLOYEE_CREATE_OR_UPDATE_SUCCESS;
  constructor(public payload: Employee) {}
}

export class CRUDEmployeeDeleteRequest implements Action {
  readonly type = ActionTypes.CRUD_EMPLOYEE_DELETE_REQUEST;
  constructor(public payload: number) {}
}

export class CRUDEmployeeDeleteSuccess implements Action {
  readonly type = ActionTypes.CRUD_EMPLOYEE_DELETE_SUCCESS;
  constructor(public payload: number) {}
}

export class CRUDEmployeeFailure implements Action {
  readonly type = ActionTypes.CRUD_EMPLOYEE_FAILURE;
  constructor(public payload: string) {}
}

export type Union
= CRUDEmployeeLoadRequest
| CRUDEmployeeLoadSuccess
| CRUDEmployeeCreateRequest
| CRUDEmployeeUpdateRequest
| CRUDEmployeeCreateOrUpdateSuccess
| CRUDEmployeeDeleteRequest
| CRUDEmployeeDeleteSuccess
| CRUDEmployeeFailure;
