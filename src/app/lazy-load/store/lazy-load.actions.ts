import { isActionNameUnique } from '@app/root-store';
import { Action } from '@ngrx/store';

// TypeScript enum’s are immutable
export enum ActionTypes {
  ENGLISH = '[Lazy-Load Page] English Translation',
  SPANISH = '[Lazy-Load Page] Spanish Translation',
  RESET = '[Lazy-Load Page] Reset Translation'
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
