import * as fromRoot from '@app/root-store';
import { Country } from '@core/services/country.model';

// state for this feature (search)
export interface SearchState {
  countries?: Country[] | [];
  isLoading: boolean;
  error?: string | null;
}

// Extends the global state to include the search feature.
// This is required because search feature module are lazy loaded.
// So the reference to search cannot be added to global state.ts directly.
export interface State extends fromRoot.State {
  search: SearchState;
}

export const initialState: SearchState = {
  countries: [],
  isLoading: false,
  error: null
};

