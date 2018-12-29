import { Action } from '@ngrx/store';
import { Country } from '../../core/services/country.model';

export enum ActionTypes {
  SEARCH2_COUNTRIES = '[Search2 Page] Search Countries',
  SEARCH2_COUNTRIES_SUCCESS = '[Search2 Page] Search Countries Success',
  SEARCH2_COUNTRIES_FAILURE = '[Search2 Page] Search Countries Failure'
}

export class Search2Countries implements Action {
  readonly type = ActionTypes.SEARCH2_COUNTRIES;
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
= Search2Countries
| Search2CountriesSuccess
| Search2CountriesFailure;
