import { Injectable } from '@angular/core';
import * as sideEffectsActions from '@app/side-effects/store/side-effects.actions';
import { Country } from '@core/services/country.model';
import { CountryService } from '@core/services/country.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class SideEffectsEffects {
  constructor(
    private countryService: CountryService,
    private actions$: Actions
  ) {}

  retrieveCountryEffects$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<sideEffectsActions.RetrieveCountryRequest>(
        sideEffectsActions.ActionTypes.RETRIEVE_COUNTRY_REQUEST
      ),
      map(
        (action: sideEffectsActions.RetrieveCountryRequest) => action.payload
      ),
      switchMap((countryName: string) =>
        this.countryService.getCountryDetail(countryName).pipe(
          map(
            (country: Country) =>
              new sideEffectsActions.RetrieveCountrySuccess(country)
          ),
          catchError((error: string) =>
            of(new sideEffectsActions.RetrieveCountryFailure(error))
          )
        )
      )
    )
  );
}
