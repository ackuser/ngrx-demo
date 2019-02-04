import { isActionNameUnique } from '@app/root-store';
import { Country } from '@core/services/country.model';
import { Action } from '@ngrx/store';

// TypeScript enum’s are immutable
export enum ActionTypes {
  SEARCH2_COUNTRIES_REQUEST = '[Search2 Page] Search Countries Request',
  SEARCH2_COUNTRIES_SUCCESS = '[Search2 Page] Search Countries Success',
  SEARCH2_COUNTRIES_FAILURE = '[Search2 Page] Search Countries Failure'
}

// To ensure NgRX actions have unique names across the application.
// This prevents any duplicate actions being dispatched.
isActionNameUnique(ActionTypes);

export class Search2CountriesRequest implements Action {
  readonly type = ActionTypes.SEARCH2_COUNTRIES_REQUEST;
  constructor(public payload: string) {}
}

export class Search2CountriesSuccess implements Action {
  readonly type = ActionTypes.SEARCH2_COUNTRIES_SUCCESS;
  constructor(public payload: Country[]) {}
}

export class Search2CountriesFailure implements Action {
  readonly type = ActionTypes.SEARCH2_COUNTRIES_FAILURE;
  constructor(public payload: string) {}
}

export type Union
= Search2CountriesRequest
| Search2CountriesSuccess
| Search2CountriesFailure;
