import { ActionTypes, Union } from '@app/basic/store/message.actions';
import { initialState, MessageState } from './message-state.interface';

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
