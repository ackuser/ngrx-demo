import { initialState, SearchState } from './search-state.interface';
import { ActionTypes, Union } from './search.actions';

export function searchReducer(state = initialState, action: Union): SearchState {
  switch (action.type) {

    case ActionTypes.SEARCH_COUNTRIES:
      return {
        ...state,
        isLoading: true,
        countries: [],
        error: null
      };

    case ActionTypes.SEARCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        countries: action.payload,
        error: null
      };

    case ActionTypes.SEARCH_COUNTRIES_FAILURE:
    return {
      ...state,
      isLoading: false,
      countries: [],
      error: action.payload,
    };

    default:
      return state;
  }
}