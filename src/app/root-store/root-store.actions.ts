import { Action } from '@ngrx/store';

export enum ActionTypes {
  LOG_OUT = '[ Application ] Logout to clear application store'
}

export class Logout implements Action {
  readonly type = ActionTypes.LOG_OUT;
  constructor() {}
}

export type Union = Logout;
