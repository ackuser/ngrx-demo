import { initialState, search2Entityadapter, Search2State } from './search2-state.interface';
import { ActionTypes, Union } from './search2.actions';

export function search2Reducer(state = initialState, action: Union): Search2State {
  switch (action.type) {

    case ActionTypes.SEARCH2_COUNTRIES:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case ActionTypes.SEARCH2_COUNTRIES_SUCCESS:
    {
      return search2Entityadapter.addAll(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    }

    case ActionTypes.SEARCH2_COUNTRIES_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };

    default:
      return state;
  }
}
