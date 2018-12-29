import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import { BasicStoreState } from '../basic/store';
import { clearStoreMetaReducer } from './meta-reducers/clear-store.meta-reducer';
import { logStoreMetaReducer } from './meta-reducers/log-store.meta-reducer';
import { RouterState } from './router-store/router-state.interface';

/**
 * Representation of the entire state. Treat each reducer like a table in a
 * database. This means our top level state interface here is just a map of keys to
 * inner state types (feature states). States of lazy loaded feature modules will
 * also be added to this state when they are loaded
 */
export interface State {
  basic: BasicStoreState.BasicState;
}

/*
* Representation of app-level state
*/
export interface AppState {
  router: RouterReducerState<RouterState>;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};


/**
 * Compose a map of meta reducers.
 * `clearStoreMetaReducer` - clears the store, will be useful when you want to reset the
 * store as soon as user logs out of the application.
 * `storeFreeze` - prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 * `logStoreMetaReducer` - logs store actions, action payload, previous state,
 * current state. Useful for debugging during development
 */

export const metaReducers: MetaReducer<any, any>[] = [
  clearStoreMetaReducer
];
if (!environment.production) {
  metaReducers.unshift(storeFreeze, logStoreMetaReducer);
}


