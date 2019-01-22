import { initialState, LazyLoadState } from '@app/lazy-load/store/lazy-load-state.interface';
import { ActionTypes, Union } from '@app/lazy-load/store/lazy-load.actions';

export function lazyLoadReducer(state = initialState, action: Union): LazyLoadState {
  switch (action.type) {

    case ActionTypes.ENGLISH:
      return {
        ...state,
       message: 'Hello World'
      };

    case ActionTypes.SPANISH:
      return {
        ...state,
        message: 'Hola Mundo'
      };
    case ActionTypes.RESET:
    return {
      ...state,
      ...initialState
    };

    default:
      return state;
  }
}
