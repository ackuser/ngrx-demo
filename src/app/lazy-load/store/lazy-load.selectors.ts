
import { LazyLoadState } from '@app/lazy-load/store/lazy-load-state.interface';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

// Selector functions
const selectLazyLoadFeatureState: MemoizedSelector<object, LazyLoadState> = createFeatureSelector<LazyLoadState>('lazyLoad');

export const selectMessage: MemoizedSelector<object, String> = createSelector(
  selectLazyLoadFeatureState,
  (state: LazyLoadState): String => state.message
);
