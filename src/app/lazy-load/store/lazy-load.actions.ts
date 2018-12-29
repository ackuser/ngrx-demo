import { Action } from '@ngrx/store';

export enum ActionTypes {
  ENGLISH = '[Lazy-Load Page] English Translation',
  SPANISH = '[Lazy-Load Page] Spanish Translation',
  RESET = '[Lazy-Load Page] Reset Translation'
}

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
