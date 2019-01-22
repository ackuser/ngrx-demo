import { Component, OnInit } from '@angular/core';
import * as fromRoot from '@app/root-store';
import { SideEffectsStoreActions, SideEffectsStoreSelectors } from '@app/side-effects/store';
import { Country } from '@core/services/country.model';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-effects',
  templateUrl: './side-effects.component.html',
  styleUrls: ['./side-effects.component.css']
})
export class SideEffectsComponent implements OnInit {

  public country$: Observable<Country>;
  public errorMessage$: Observable<string>;
  public isLoading$: Observable<boolean>;

  constructor(private store$: Store<fromRoot.State>) { }

  ngOnInit() {

    this.store$.dispatch(new SideEffectsStoreActions.RetrieveCountryRequest('USA'));

    this.isLoading$ = this.store$.pipe(
      select(SideEffectsStoreSelectors.selectIsLoading)
    );

    this.country$ = this.store$.pipe(
      select(SideEffectsStoreSelectors.selectCountryDetail)
    );

    this.errorMessage$ = this.store$.pipe(
      select(SideEffectsStoreSelectors.selectError)
    );
  }

  public populateCountryDetail(countryName: string) {
    this.store$.dispatch(new SideEffectsStoreActions.RetrieveCountryRequest(countryName));
  }

}
