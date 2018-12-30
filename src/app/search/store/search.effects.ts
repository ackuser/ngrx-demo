import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Country } from '../../core/services/country.model';
import { CountryService } from '../../core/services/country.service';
import * as searchActions from './search.actions';

@Injectable()
export class SearchEffects {

  constructor(
    private countryService: CountryService,
    private actions$: Actions
  ) { }

  @Effect()
  searchCountriesEffects$: Observable<Action> = this.actions$.pipe(
    ofType<searchActions.SearchCountries>(searchActions.ActionTypes.SEARCH_COUNTRIES_REQUEST),
    map((action: searchActions.SearchCountries) => action.payload),
    switchMap((searchKey: string) =>
      this.countryService.getCountries(searchKey).pipe(
        map((countries: Country[]) => (new searchActions.SearchCountriesSuccess(countries))),
        catchError( (error: string) => of(new searchActions.SearchCountriesFailure(error)))
      )
    )
  );

}
