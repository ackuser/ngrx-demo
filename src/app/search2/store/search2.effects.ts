import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Country } from '../../core/services/country.model';
import { CountryService } from '../../core/services/country.service';
import * as search2Actions from './search2.actions';

@Injectable()
export class Search2Effects {

  constructor(
    private countryService: CountryService,
    private actions$: Actions
  ) { }

  @Effect()
  search2CountriesEffects$: Observable<Action> = this.actions$.pipe(
    ofType<search2Actions.Search2Countries>(search2Actions.ActionTypes.SEARCH2_COUNTRIES),
    map((action: search2Actions.Search2Countries) => action.payload),
    switchMap((searchKey: string) =>
      this.countryService.getCountries(searchKey).pipe(
        map((countries: Country[]) => (new search2Actions.Search2CountriesSuccess(countries))),
        catchError( (error: string) => of(new search2Actions.Search2CountriesFailure(error)))
      )
    )
  );

}
