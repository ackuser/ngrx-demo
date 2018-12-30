import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Employee } from './../../core/services/employee.model';
import * as fromRoot from './../../root-store';

// state for this feature (search)
export interface CrudState extends EntityState<Employee> {
  // additional entities state properties goes here
  isLoading: boolean;
  error?: string | null;
}
// Note: Since  primary key is 'id', Method to select primary key is not needed
// unlike we did it for demo 5

/* A compare function used to sort the collection. The comparer function
is only needed if the collection needs to be sorted before being displayed.
 */
export function sortByName(a: Employee, b: Employee): number {
  return a.name.localeCompare(b.name);
}

/*
Setting to false to leave the collection unsorted, will sorted by id which is more performant
during CRUD operations.
*/
export const crudEntityadapter: EntityAdapter<Employee> = createEntityAdapter<Employee>({
  sortComparer: sortByName
  // sortComparer: false
});

export const initialState: CrudState = crudEntityadapter.getInitialState({
  isLoading: false,
  error: null
});


// Out-of-the-box, created entity adapter provides built-in default selectors
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = crudEntityadapter.getSelectors();


// Extends the global state to include the search2 feature.
// This is required because search2 feature module are lazy loaded.
// So the reference to search2 cannot be added to global state.ts directly.
export interface State extends fromRoot.State {
  crud: CrudState;
}
