
import { LazyLoadState } from '@app/lazy-load/store/lazy-load-state.interface';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

// Selector functions
const selectLazyLoadFeatureState: MemoizedSelector<object, LazyLoadState> = createFeatureSelector<LazyLoadState>('lazyLoad');

export const selectMessage: MemoizedSelector<object, string> = createSelector(
  selectLazyLoadFeatureState,
  (state: LazyLoadState): string => state.message
);
