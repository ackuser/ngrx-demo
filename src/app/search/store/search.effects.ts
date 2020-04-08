import { Injectable } from '@angular/core';
import * as searchActions from '@app/search/store/search.actions';
import { Country } from '@core/services/country.model';
import { CountryService } from '@core/services/country.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class SearchEffects {
  constructor(
    private countryService: CountryService,
    private actions$: Actions
  ) {}

  searchCountriesEffects$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<searchActions.SearchCountriesRequest>(
        searchActions.ActionTypes.SEARCH_COUNTRIES_REQUEST
      ),
      map((action: searchActions.SearchCountriesRequest) => action.payload),
      switchMap((searchKey: string) =>
        this.countryService.getCountries(searchKey).pipe(
          map(
            (countries: Country[]) =>
              new searchActions.SearchCountriesSuccess(countries)
          ),
          catchError((error: string) =>
            of(new searchActions.SearchCountriesFailure(error))
          )
        )
      )
    )
  );
}
