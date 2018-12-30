import { Action } from '@ngrx/store';
import { Country } from '../../core/services/country.model';

export enum ActionTypes {
  SEARCH_COUNTRIES_REQUEST = '[Search Page] Search Countries Request',
  SEARCH_COUNTRIES_SUCCESS = '[Search Page] Search Countries Success',
  SEARCH_COUNTRIES_FAILURE = '[Search Page] Search Countries Failure'
}

export class SearchCountriesRequest implements Action {
  readonly type = ActionTypes.SEARCH_COUNTRIES_REQUEST;
  constructor(public payload: string) {}
}

export class SearchCountriesSuccess implements Action {
  readonly type = ActionTypes.SEARCH_COUNTRIES_SUCCESS;
  constructor(public payload: Country[]) {}
}

export class SearchCountriesFailure implements Action {
  readonly type = ActionTypes.SEARCH_COUNTRIES_FAILURE;
  constructor(public payload: string) {}
}

export type Union
= SearchCountriesRequest
| SearchCountriesSuccess
| SearchCountriesFailure;
