import { ActionTypes, Union } from '@app/basic/store/switch.actions';
import { initialState, SwitchState } from './switch-state.interface';

export function switchReducer(state = initialState, action: Union): SwitchState {
  switch (action.type) {

    case ActionTypes.ON:
      return {
        ...state,
       hasStatus: action.payload
      };

    case ActionTypes.OFF:
      return {
        ...state,
        hasStatus: action.payload
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
