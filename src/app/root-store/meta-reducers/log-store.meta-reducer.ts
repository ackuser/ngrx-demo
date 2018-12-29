import { ActionReducer } from '@ngrx/store';
import { State } from './../root-store-state.interface';


// console.log all actions
export function logStoreMetaReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): any => {
    const nextState = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, state);
    console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
    console.log(`%c action payload`, `color: #03A9F4; font-weight: bold`, (<any>action).payload);
    console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, nextState);
    console.groupEnd();
    return nextState;
  };
}
