import { Action } from '@ngrx/store';
import { Employee } from './../../core/services/employee.model';

export enum ActionTypes {
  CRUD_EMPLOYEE_LOAD_REQUEST = '[CRUD Page] Load Employee Request',
  CRUD_EMPLOYEE_LOAD_SUCCESS = '[CRUD Page] Load Employee Success',
  CRUD_EMPLOYEE_CREATE_REQUEST = '[CRUD Page] Create Employee Request',
  CRUD_EMPLOYEE_UPDATE_REQUEST = '[CRUD Page] Update Employee Request',
  CRUD_EMPLOYEE_CREATE_UPDATE_SUCCESS = '[CRUD Page] Create or Update Employee Success',
  CRUD_EMPLOYEE_DELETE_REQUEST = '[CRUD Page] Delete Employee Request',
  CRUD_EMPLOYEE_DELETE_SUCCESS = '[CRUD Page] Delete Employee Success',
  CRUD_EMPLOYEE_FAILURE = '[CRUD Page] Employee Failure'
}

export class CRUDEmployeeLoad implements Action {
  readonly type = ActionTypes.CRUD_EMPLOYEE_LOAD_REQUEST;
  constructor() {}
}

export class CRUDEmployeeLoadSuccess implements Action {
  readonly type = ActionTypes.CRUD_EMPLOYEE_LOAD_SUCCESS;
  constructor(public payload: Employee[]) {}
}

export class CRUDEmployeeCreate implements Action {
  readonly type = ActionTypes.CRUD_EMPLOYEE_CREATE_REQUEST;
  constructor(public payload: Employee) {}
}

export class CRUDEmployeeUpdate implements Action {
  readonly type = ActionTypes.CRUD_EMPLOYEE_UPDATE_REQUEST;
  constructor(public payload: Employee) {}
}

export class CRUDEmployeeCreateOrUpdateSuccess implements Action {
  readonly type = ActionTypes.CRUD_EMPLOYEE_CREATE_UPDATE_SUCCESS;
  constructor(public payload: Employee) {}
}

export class CRUDEmployeeDelete implements Action {
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
= CRUDEmployeeLoad
| CRUDEmployeeLoadSuccess
| CRUDEmployeeCreate
| CRUDEmployeeUpdate
| CRUDEmployeeCreateOrUpdateSuccess
| CRUDEmployeeDelete
| CRUDEmployeeDeleteSuccess
| CRUDEmployeeFailure;
