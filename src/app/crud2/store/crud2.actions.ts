import { Action } from '@ngrx/store';
import { Employee } from './../../core/services/employee.model';

export enum ActionTypes {
  CRUD2_EMPLOYEE_LOAD_REQUEST = '[CRUD2 Page] Load Employee Request',
  CRUD2_EMPLOYEE_LOAD_SUCCESS = '[CRUD2 Page] Load Employee Success',
  CRUD2_EMPLOYEE_CREATE_REQUEST = '[CRUD2 Page] Create Employee Request',
  CRUD2_EMPLOYEE_UPDATE_REQUEST = '[CRUD2 Page] Update Employee Request',
  CRUD2_EMPLOYEE_CREATE_UPDATE_SUCCESS = '[CRUD2 Page] Create or Update Employee Success',
  CRUD2_EMPLOYEE_DELETE_REQUEST = '[CRUD2 Page] Delete Employee Request',
  CRUD2_EMPLOYEE_DELETE_SUCCESS = '[CRUD2 Page] Delete Employee Success',
  CRUD2_EMPLOYEE_FAILURE = '[CRUD2 Page] Employee Failure'
}

export class CRUD2EmployeeLoadRequest implements Action {
  readonly type = ActionTypes.CRUD2_EMPLOYEE_LOAD_REQUEST;
  constructor() {}
}

export class CRUD2EmployeeLoadSuccess implements Action {
  readonly type = ActionTypes.CRUD2_EMPLOYEE_LOAD_SUCCESS;
  constructor(public payload: Employee[]) {}
}

export class CRUD2EmployeeCreate implements Action {
  readonly type = ActionTypes.CRUD2_EMPLOYEE_CREATE_REQUEST;
  constructor(public payload: Employee) {}
}

export class CRUD2EmployeeUpdate implements Action {
  readonly type = ActionTypes.CRUD2_EMPLOYEE_UPDATE_REQUEST;
  constructor(public payload: Employee) {}
}

export class CRUD2EmployeeCreateOrUpdateSuccess implements Action {
  readonly type = ActionTypes.CRUD2_EMPLOYEE_CREATE_UPDATE_SUCCESS;
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
| CRUD2EmployeeCreate
| CRUD2EmployeeUpdate
| CRUD2EmployeeCreateOrUpdateSuccess
| CRUD2EmployeeDeleteRequest
| CRUD2EmployeeDeleteSuccess
| CRUD2EmployeeFailure;
