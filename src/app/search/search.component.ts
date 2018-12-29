import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Country } from './../core/services/country.model';
import * as fromRoot from './../root-store';
import { SearchStoreActions, SearchStoreSelectors } from './store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public countries$: Observable<Country[]>;
  public errorMessage$: Observable<string>;
  public isLoading$: Observable<boolean>;
  public searchControl: FormControl;

  constructor(private store$: Store<fromRoot.State>) { }

  ngOnInit() {
    this.searchControl = new FormControl();
    this.populateCountries();

    this.isLoading$ = this.store$.pipe(
      select(SearchStoreSelectors.selectIsLoading)
    );

    this.countries$ = this.store$.pipe(
      select(SearchStoreSelectors.selectCountries)
    );

    this.errorMessage$ = this.store$.pipe(
      select(SearchStoreSelectors.selectError)
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
        this.store$.dispatch(new SearchStoreActions.SearchCountries(searchKey));
      });
  }

}
