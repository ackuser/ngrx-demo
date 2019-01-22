
import { SideEffectsState } from '@app/side-effects/store/side-effects-state.interface';
import { Country } from '@core/services/country.model';
import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

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
