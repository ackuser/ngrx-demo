
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { BasicState } from './basic-state.interface';
import { SwitchState } from './switch-state.interface';

// Selector functions

// Look up feature state from store using  feature state name 'basic'
const selectBasicFeatureState: MemoizedSelector<object, BasicState> = createFeatureSelector<BasicState>('basic');

// createSelector function can take up to eight selector functions
// as arguments, each one referencing to different slices of state.
// The last argumet to createSelector is treated as  “projector function”
export const selectSwitchState: MemoizedSelector<object, SwitchState> = createSelector(
  selectBasicFeatureState,
  (state: BasicState): SwitchState => state.switch
);

export const selectSwitchStatus: MemoizedSelector<object, boolean> = createSelector(
  selectSwitchState,
  (state: SwitchState): boolean => state.hasStatus
);
