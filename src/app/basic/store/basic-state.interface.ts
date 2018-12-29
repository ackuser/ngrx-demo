import { ActionReducerMap } from '@ngrx/store';
import { MessageState } from './message-state.interface';
import { messageReducer } from './message.reducer';
import { SwitchState } from './switch-state.interface';
import { switchReducer } from './switch.reducer';

/**
 * Each reducer is like a table in a database. Here `BasicState` is a feature-level
 * state interface and is just a map of keys to inner state types. It composes
 * 2 inner state `MessageState` and `SwitchState`
 */
export interface BasicState {
  message: MessageState;
  switch: SwitchState;
}

/**
 * Here basic feature module state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 * Signature matches BasicState interface
 */
export const basicReducers: ActionReducerMap<BasicState> = {
  message: messageReducer,
  switch: switchReducer
};
