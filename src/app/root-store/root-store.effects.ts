import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as rootStoreActions from '@app/root-store/root-store.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class RootStoreEffects {

  constructor(
    private actions$: Actions,
    private router: Router
  ) { }

  // On Logout navigate user to home screen and dispatch action to reducer to clear the store
  @Effect()
  logOutUserEffects$: Observable<Action> = this.actions$.pipe(
    ofType<rootStoreActions.LogoutToHome>(rootStoreActions.ActionTypes.LOG_OUT_TO_HOME),
    tap(() => { this.router.navigate(['basic']); }),
    map(() => (new rootStoreActions.LogoutToClearStore()))
  );

}
