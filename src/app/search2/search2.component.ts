import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Country } from './../core/services/country.model';
import * as fromRoot from './../root-store';
import { Search2StoreActions, Search2StoreSelectors } from './store';

@Component({
  selector: 'app-search2',
  templateUrl: './search2.component.html',
  styleUrls: ['./search2.component.css']
})
export class Search2Component implements OnInit {

  public countries$: Observable<Country[]>;
  public errorMessage$: Observable<string>;
  public isLoading$: Observable<boolean>;
  public searchControl: FormControl;

  constructor(private store$: Store<fromRoot.State>) { }

  ngOnInit() {
    this.searchControl = new FormControl();
    this.populateCountries();

    this.isLoading$ = this.store$.pipe(
      select(Search2StoreSelectors.selectSearch2Loading)
    );

    this.countries$ = this.store$.pipe(
      select(Search2StoreSelectors.selectSearch2Countries)
    );

    this.errorMessage$ = this.store$.pipe(
      select(Search2StoreSelectors.selectSearch2Error)
    );
  }


  public populateCountries() {
    this.searchControl.valueChanges
      .pipe(
        map((searchText: string) => searchText && searchText.trim()),
        filter((searchText: string) => {
          const filteredResult = searchText.length > 2 && searchText.length < 15;
          return filteredResult;
        }),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((searchKey) => {
        this.store$.dispatch(new Search2StoreActions.Search2Countries(searchKey));
      });
  }

}
