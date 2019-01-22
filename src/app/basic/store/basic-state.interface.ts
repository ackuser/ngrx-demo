import { MessageState } from '@app/basic/store/message-state.interface';
import { messageReducer } from '@app/basic/store/message.reducer';
import { SwitchState } from '@app/basic/store/switch-state.interface';
import { switchReducer } from '@app/basic/store/switch.reducer';
import { ActionReducerMap } from '@ngrx/store';

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
