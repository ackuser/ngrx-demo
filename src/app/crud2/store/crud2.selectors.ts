
import { Crud2State, selectAll } from '@app/crud2/store/crud2-state.interface';
import { Employee } from '@app/in-memory-api/employee.interface';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

// Selector functions
const selectCrud2State: MemoizedSelector<object, Crud2State>
  = createFeatureSelector<Crud2State>('crud2');

export const selectCrud2Error: MemoizedSelector<object, string> =
createSelector(
  selectCrud2State,
  (state: Crud2State): string => state.error
);

export const selectCrud2LoadingStatus: MemoizedSelector<object, boolean> =
createSelector(
  selectCrud2State,
  (state: Crud2State): boolean => state.isLoading
);

// Create the default selectors
export const selectCrud2AllEmpolyees: MemoizedSelector<object,  Employee[]> =
createSelector(
  selectCrud2State,
  // using created entity adapter's built-in selectors
  selectAll
);

