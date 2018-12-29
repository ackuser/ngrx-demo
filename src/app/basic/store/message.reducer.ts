import { initialState, MessageState } from './message-state.interface';
import { ActionTypes, Union } from './message.actions';

export function messageReducer(state = initialState, action: Union): MessageState {
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
