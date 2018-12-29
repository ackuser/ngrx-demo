import { Action } from '@ngrx/store';
import { Country } from './../../core/services/country.model';

export enum ActionTypes {
  RETRIEVE_COUNTRY = '[Side-Effects Page] Retreive Country',
  RETRIEVE_COUNTRY_SUCCESS = '[Side-Effects Page] Retreive Country Success',
  RETRIEVE_COUNTRY_FAILURE = '[Side-Effects Page] Retreive Country Failure'
}

export class RetrieveCountry implements Action {
  readonly type = ActionTypes.RETRIEVE_COUNTRY;
  constructor(public payload: string) {}
}

export class RetrieveCountrySuccess implements Action {
  readonly type = ActionTypes.RETRIEVE_COUNTRY_SUCCESS;
  constructor(public payload: Country) {}
}

export class RetrieveCountryFailure implements Action {
  readonly type = ActionTypes.RETRIEVE_COUNTRY_FAILURE;
  constructor(public payload: string) {}
}

export type Union
= RetrieveCountry
| RetrieveCountrySuccess
| RetrieveCountryFailure;
