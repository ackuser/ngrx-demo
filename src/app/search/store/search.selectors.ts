
import { SearchState } from '@app/search/store/search-state.interface';
import { Country } from '@core/services/country.model';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

// Selector functions
const selectSearchState: MemoizedSelector<object, SearchState>
  = createFeatureSelector<SearchState>('search');

export const selectCountries: MemoizedSelector<object, Country[]> = createSelector(
  selectSearchState,
  (state: SearchState): Country[] => state.countries
);

export const selectError: MemoizedSelector<object, string> = createSelector(
  selectSearchState,
  (state: SearchState): string => state.error
);

export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(
  selectSearchState,
  (state: SearchState): boolean => state.isLoading
);
