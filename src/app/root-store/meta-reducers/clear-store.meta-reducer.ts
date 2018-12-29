import { ActionReducer } from '@ngrx/store';
import { State } from '../root-store-state.interface';
import { ActionTypes, Union } from '../root-store.actions';


// reset meta-reduce :  clear the store after the LOG_OUT action.
// If the action type is LOG_OUT we will return an undefined state and
// therefore all of the reducers will return the initial value as they are supposed to.
export function clearStoreMetaReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: Union): any => {
    if ( action.type === ActionTypes.LOG_OUT ) {
      state = undefined;
    }
    const nextState = reducer(state, action);
    return nextState;
  };
}
