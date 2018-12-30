import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Country } from '../../core/services/country.model';
import * as fromRoot from '../../root-store';

// state for this feature (search)
export interface Search2State extends EntityState<Country> {
  // additional entities state properties goes here
  isLoading: boolean;
  error?: string | null;
}
// Method to select primary key. if primary key is 'id' then this is not needed
export function selectCountryId(country: Country): string {
// In this case this would be optional since primary key is id
  return country.name;
}

/* A compare function used to sort the collection. The comparer function
is only needed if the collection needs to be sorted before being displayed.
Set to false to leave the collection unsorted, which is more performant
during CRUD operations. */
export function sortByName(a: Country, b: Country): number {
  return a.name.localeCompare(b.name);
}

export const search2Entityadapter: EntityAdapter<Country> = createEntityAdapter<Country>({
  selectId: selectCountryId,
  sortComparer: sortByName
});

export const initialState: Search2State = search2Entityadapter.getInitialState({
  isLoading: false,
  error: null
});


// Out-of-the-box, created entity adapter provides built-in default selectors
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = search2Entityadapter.getSelectors();


// Extends the global state to include the search2 feature.
// This is required because search2 feature module are lazy loaded.
// So the reference to search2 cannot be added to global state.ts directly.
export interface State extends fromRoot.State {
  search2: Search2State;
}
