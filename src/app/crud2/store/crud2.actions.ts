import { Action } from '@ngrx/store';
import { Employee } from './../../core/services/employee.model';

export enum ActionTypes {
  CRUD2_EMPLOYEE_LOAD = '[CRUD2 Page] Load Employees',
  CRUD2_EMPLOYEE_LOAD_SUCCESS = '[CRUD2 Page] Success Employee Load Transaction',
  CRUD2_EMPLOYEE_CREATE = '[CRUD2 Page] Create Employee',
  CRUD2_EMPLOYEE_UPDATE = '[CRUD2 Page] Update Employee',
  CRUD2_EMPLOYEE_CREATE_UPDATE_SUCCESS = '[CRUD2 Page] Success Create or Update Employee',
  CRUD2_EMPLOYEE_DELETE = '[CRUD2 Page] Delete Employee',
  CRUD2_EMPLOYEE_DELETE_SUCCESS = '[CRUD2 Page] Success Delete Employee',
  CRUD2_EMPLOYEE_FAILURE = '[CRUD2 Page] Failure Employee Transaction'
}

export class CRUD2EmployeeLoad implements Action {
  readonly type = ActionTypes.CRUD2_EMPLOYEE_LOAD;
  constructor() {}
}

export class CRUD2EmployeeLoadSuccess implements Action {
  readonly type = ActionTypes.CRUD2_EMPLOYEE_LOAD_SUCCESS;
  constructor(public payload: Employee[]) {}
}

export class CRUD2EmployeeCreate implements Action {
  readonly type = ActionTypes.CRUD2_EMPLOYEE_CREATE;
  constructor(public payload: Employee) {}
}

export class CRUD2EmployeeUpdate implements Action {
  readonly type = ActionTypes.CRUD2_EMPLOYEE_UPDATE;
  constructor(public payload: Employee) {}
}

export class CRUD2EmployeeCreateOrUpdateSuccess implements Action {
  readonly type = ActionTypes.CRUD2_EMPLOYEE_CREATE_UPDATE_SUCCESS;
  constructor(public payload: Employee) {}
}

export class CRUD2EmployeeDelete implements Action {
  readonly type = ActionTypes.CRUD2_EMPLOYEE_DELETE;
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
= CRUD2EmployeeLoad
| CRUD2EmployeeLoadSuccess
| CRUD2EmployeeCreate
| CRUD2EmployeeUpdate
| CRUD2EmployeeCreateOrUpdateSuccess
| CRUD2EmployeeDelete
| CRUD2EmployeeDeleteSuccess
| CRUD2EmployeeFailure;
