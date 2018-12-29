
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { Country } from './../../core/services/country.model';
import { SideEffectsState } from './side-effects-state.interface';

// Selector functions
const selectSideEffectsFeatureState: MemoizedSelector<object, SideEffectsState> = createFeatureSelector<SideEffectsState>('sideEffects');

export const selectCountryDetail: MemoizedSelector<object, Country> = createSelector(
  selectSideEffectsFeatureState,
  (state: SideEffectsState): Country => state.country
);

export const selectError: MemoizedSelector<object, string> = createSelector(
  selectSideEffectsFeatureState,
  (state: SideEffectsState): string => state.error
);

export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(
  selectSideEffectsFeatureState,
  (state: SideEffectsState): boolean => state.isLoading
);
