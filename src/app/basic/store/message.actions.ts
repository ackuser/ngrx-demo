import { Action } from '@ngrx/store';
import { isActionNameUnique } from './../../root-store';

export enum ActionTypes {
  ENGLISH = '[Basic Page] English Translation',
  SPANISH = '[Basic Page] Spanish Translation',
  RESET = '[Basic Page] Reset Translation'
}

// To ensure NgRX actions have unique names across the application.
// This prevents any duplicate actions being dispatched.
isActionNameUnique(ActionTypes);

export class EnglishTranslator implements Action {
  readonly type = ActionTypes.ENGLISH;
  constructor() {}
}

export class SpanishTranslator implements Action {
  readonly type = ActionTypes.SPANISH;
  constructor() {}
}

export class ResetTranslator implements Action {
  readonly type = ActionTypes.RESET;
  constructor() {}
}

export type Union
= EnglishTranslator
| SpanishTranslator
| ResetTranslator;
