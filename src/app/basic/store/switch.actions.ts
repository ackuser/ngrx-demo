import { isActionNameUnique } from '@app/root-store';
import { Action } from '@ngrx/store';

export enum ActionTypes {
  ON = '[Basic Page] ON Switch',
  OFF = '[Basic Page] OFF Switch',
  RESET = '[Basic Page] Reset Switch'
}

// To ensure NgRX actions have unique names across the application.
// This prevents any duplicate actions being dispatched.
isActionNameUnique(ActionTypes);

export class SwitchON implements Action {
  readonly type = ActionTypes.ON;
  constructor(public payload: boolean) {}
}

export class SwitchOFF implements Action {
  readonly type = ActionTypes.OFF;
  constructor(public payload: boolean) {}
}

export class ResetSwitch implements Action {
  readonly type = ActionTypes.RESET;
  constructor() {}
}

export type Union
 = SwitchON
 | SwitchOFF
 | ResetSwitch;
