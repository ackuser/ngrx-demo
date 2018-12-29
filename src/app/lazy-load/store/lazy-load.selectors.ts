
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { LazyLoadState } from './lazy-load-state.interface';

// Selector functions
const selectLazyLoadFeatureState: MemoizedSelector<object, LazyLoadState> = createFeatureSelector<LazyLoadState>('lazyLoad');

export const selectMessage: MemoizedSelector<object, String> = createSelector(
  selectLazyLoadFeatureState,
  (state: LazyLoadState): String => state.message
);
