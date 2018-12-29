import { Action } from '@ngrx/store';
import { Employee } from './../../core/services/employee.model';

export enum ActionTypes {
  CRUD_EMPLOYEE_LOAD = '[CRUD Page] Load Employees',
  CRUD_EMPLOYEE_LOAD_SUCCESS = '[CRUD Page] Success Employee Load Transaction',
  CRUD_EMPLOYEE_CREATE = '[CRUD Page] Create Employee',
  CRUD_EMPLOYEE_UPDATE = '[CRUD Page] Update Employee',
  CRUD_EMPLOYEE_CREATE_UPDATE_SUCCESS = '[CRUD Page] Success Create or Update Employee',
  CRUD_EMPLOYEE_DELETE = '[CRUD Page] Delete Employee',
  CRUD_EMPLOYEE_DELETE_SUCCESS = '[CRUD Page] Success Delete Employee',
  CRUD_EMPLOYEE_FAILURE = '[CRUD Page] Failure Employee Transaction'
}

export class CRUDEmployeeLoad implements Action {
  readonly type = ActionTypes.CRUD_EMPLOYEE_LOAD;
  constructor() {}
}

export class CRUDEmployeeLoadSuccess implements Action {
  readonly type = ActionTypes.CRUD_EMPLOYEE_LOAD_SUCCESS;
  constructor(public payload: Employee[]) {}
}

export class CRUDEmployeeCreate implements Action {
  readonly type = ActionTypes.CRUD_EMPLOYEE_CREATE;
  constructor(public payload: Employee) {}
}

export class CRUDEmployeeUpdate implements Action {
  readonly type = ActionTypes.CRUD_EMPLOYEE_UPDATE;
  constructor(public payload: Employee) {}
}

export class CRUDEmployeeCreateOrUpdateSuccess implements Action {
  readonly type = ActionTypes.CRUD_EMPLOYEE_CREATE_UPDATE_SUCCESS;
  constructor(public payload: Employee) {}
}

export class CRUDEmployeeDelete implements Action {
  readonly type = ActionTypes.CRUD_EMPLOYEE_DELETE;
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
