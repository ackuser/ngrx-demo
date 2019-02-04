import { isActionNameUnique } from '@app/root-store';
import { Country } from '@core/services/country.model';
import { Action } from '@ngrx/store';

// TypeScript enum’s are immutable
export enum ActionTypes {
  RETRIEVE_COUNTRY_REQUEST = '[Side-Effects Page] Retreive Country Request',
  RETRIEVE_COUNTRY_SUCCESS = '[Side-Effects Page] Retreive Country Success',
  RETRIEVE_COUNTRY_FAILURE = '[Side-Effects Page] Retreive Country Failure'
}

// To ensure NgRX actions have unique names across the application.
// This prevents any duplicate actions being dispatched.
isActionNameUnique(ActionTypes);

export class RetrieveCountryRequest implements Action {
  readonly type = ActionTypes.RETRIEVE_COUNTRY_REQUEST;
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
= RetrieveCountryRequest
| RetrieveCountrySuccess
| RetrieveCountryFailure;
