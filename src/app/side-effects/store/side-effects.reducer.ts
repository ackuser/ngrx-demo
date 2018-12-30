import { initialState, SideEffectsState } from './side-effects-state.interface';
import { ActionTypes, Union } from './side-effects.actions';

export function sideEffectsReducer(state = initialState, action: Union): SideEffectsState {
  switch (action.type) {

    case ActionTypes.RETRIEVE_COUNTRY_REQUEST:
      return {
        ...state,
        isLoading: true,
        country: null,
        error: null
      };

    case ActionTypes.RETRIEVE_COUNTRY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        country: action.payload,
        error: null
      };

    case ActionTypes.RETRIEVE_COUNTRY_FAILURE:
    return {
      ...state,
      isLoading: false,
      country: null,
      error: action.payload,
    };

    default:
      return state;
  }
}
