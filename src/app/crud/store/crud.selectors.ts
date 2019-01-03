
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { Employee } from './../../in-memory-api/employee.interface';
import { CrudState, selectAll } from './crud-state.interface';

// Selector functions
const selectCrudState: MemoizedSelector<object, CrudState>
  = createFeatureSelector<CrudState>('crud');

export const selectCrudError: MemoizedSelector<object, string> =
createSelector(
  selectCrudState,
  (state: CrudState): string => state.error
);

export const selectCrudLoadingStatus: MemoizedSelector<object, boolean> =
createSelector(
  selectCrudState,
  (state: CrudState): boolean => state.isLoading
);

// Create the default selectors
export const selectCrudAllEmpolyees: MemoizedSelector<object,  Employee[]> =
createSelector(
  selectCrudState,
  // using created entity adapter's built-in selectors
  selectAll
);

