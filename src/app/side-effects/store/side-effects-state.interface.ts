import * as fromRoot from '@app/root-store';
import { Country } from '@core/services/country.model';

// state for this feature (side-effects)
export interface SideEffectsState {
  country?: Country | null;
  isLoading: boolean;
  error?: string | null;
}

// Extends the global state to include the side-effects feature.
// This is required because side-effects feature module are lazy loaded.
// So the reference to SideEffectsState cannot be added to global state.ts directly.
export interface State extends fromRoot.State {
  sideEffects: SideEffectsState;
}

export const initialState: SideEffectsState = {
  country: null,
  isLoading: false,
  error: null
};

