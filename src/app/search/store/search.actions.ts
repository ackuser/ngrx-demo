import { Action } from '@ngrx/store';
import { Country } from '../../core/services/country.model';

export enum ActionTypes {
  SEARCH_COUNTRIES = '[Search Page] Search Countries',
  SEARCH_COUNTRIES_SUCCESS = '[Search Page] Search Countries Success',
  SEARCH_COUNTRIES_FAILURE = '[Search Page] Search Countries Failure'
}

export class SearchCountries implements Action {
  readonly type = ActionTypes.SEARCH_COUNTRIES;
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
= SearchCountries
| SearchCountriesSuccess
| SearchCountriesFailure;