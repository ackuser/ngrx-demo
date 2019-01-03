import { Action } from '@ngrx/store';
import { Employee } from './../../in-memory-api/employee.interface';
import { isActionNameUnique } from './../../root-store';

export enum ActionTypes {
  CRUD2_EMPLOYEE_LOAD_REQUEST = '[CRUD2 Page] Load Employee Request',
  CRUD2_EMPLOYEE_LOAD_SUCCESS = '[CRUD2 Page] Load Employee Success',
  CRUD2_EMPLOYEE_CREATE_REQUEST = '[CRUD2 Page] Create Employee Request',
  CRUD2_EMPLOYEE_UPDATE_REQUEST = '[CRUD2 Page] Update Employee Request',
  CRUD2_EMPLOYEE_CREATE_OR_UPDATE_SUCCESS = '[CRUD2 Page] Create or Update Employee Success',
  CRUD2_EMPLOYEE_DELETE_REQUEST = '[CRUD2 Page] Delete Employee Request',
  CRUD2_EMPLOYEE_DELETE_SUCCESS = '[CRUD2 Page] Delete Employee Success',
  CRUD2_EMPLOYEE_FAILURE = '[CRUD2 Page] Employee Failure'
}

// To ensure NgRX actions have unique names across the application.
// This prevents any duplicate actions being dispatched.
isActionNameUnique(ActionTypes);

export class CRUD2EmployeeLoadRequest implements Action {
  readonly type = ActionTypes.CRUD2_EMPLOYEE_LOAD_REQUEST;
  constructor() {}
}

export class CRUD2EmployeeLoadSuccess implements Action {
  readonly type = ActionTypes.CRUD2_EMPLOYEE_LOAD_SUCCESS;
  constructor(public payload: Employee[]) {}
}

export class CRUD2EmployeeCreateRequest implements Action {
  readonly type = ActionTypes.CRUD2_EMPLOYEE_CREATE_REQUEST;
  constructor(public payload: Employee) {}
}

export class CRUD2EmployeeUpdateRequest implements Action {
  readonly type = ActionTypes.CRUD2_EMPLOYEE_UPDATE_REQUEST;
  constructor(public payload: Employee) {}
}

export class CRUD2EmployeeCreateOrUpdateSuccess implements Action {
  readonly type = ActionTypes.CRUD2_EMPLOYEE_CREATE_OR_UPDATE_SUCCESS;
  constructor(public payload: Employee) {}
}

export class CRUD2EmployeeDeleteRequest implements Action {
  readonly type = ActionTypes.CRUD2_EMPLOYEE_DELETE_REQUEST;
  constructor(public payload: number) {}
}

export class CRUD2EmployeeDeleteSuccess implements Action {
  readonly type = ActionTypes.CRUD2_EMPLOYEE_DELETE_SUCCESS;
  constructor(public payload: number) {}
}

export class CRUD2EmployeeFailure implements Action {
  readonly type = ActionTypes.CRUD2_EMPLOYEE_FAILURE;
  constructor(public payload: string) {}
}

export type Union
= CRUD2EmployeeLoadRequest
| CRUD2EmployeeLoadSuccess
| CRUD2EmployeeCreateRequest
| CRUD2EmployeeUpdateRequest
| CRUD2EmployeeCreateOrUpdateSuccess
| CRUD2EmployeeDeleteRequest
| CRUD2EmployeeDeleteSuccess
| CRUD2EmployeeFailure;
