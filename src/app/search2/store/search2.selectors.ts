
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { Country } from './../../core/services/country.model';
import { Search2State, selectAll } from './search2-state.interface';

// Selector functions
const selectSearch2State: MemoizedSelector<object, Search2State>
  = createFeatureSelector<Search2State>('search2');

export const selectSearch2Error: MemoizedSelector<object, string> =
createSelector(
  selectSearch2State,
  (state: Search2State): string => state.error
);

export const selectSearch2Loading: MemoizedSelector<object, boolean> =
createSelector(
  selectSearch2State,
  (state: Search2State): boolean => state.isLoading
);
// Create the default selectors
export const selectSearch2Countries: MemoizedSelector<object,  Country[]> =
createSelector(
  selectSearch2State,
  // using created entity adapter's built-in selectors
  selectAll
);

