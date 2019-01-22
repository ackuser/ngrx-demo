import { crudEntityadapter, CrudState, initialState } from './crud-state.interface';
import { ActionTypes, Union } from './crud.actions';

export function crudReducer(state = initialState, action: Union): CrudState {
  switch (action.type) {

    case ActionTypes.CRUD_EMPLOYEE_LOAD_REQUEST:
    case ActionTypes.CRUD_EMPLOYEE_CREATE_REQUEST:
    case ActionTypes.CRUD_EMPLOYEE_UPDATE_REQUEST:
    case ActionTypes.CRUD_EMPLOYEE_DELETE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }

    case ActionTypes.CRUD_EMPLOYEE_LOAD_SUCCESS: {
      // Replace current collection with provided collection
      return crudEntityadapter.addAll(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    }

    case ActionTypes.CRUD_EMPLOYEE_CREATE_OR_UPDATE_SUCCESS: {
      // Add or Update one entity in the collection
      return crudEntityadapter.upsertOne(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    }

    case ActionTypes.CRUD_EMPLOYEE_DELETE_SUCCESS: {
      // Remove one entity from the collection
      return crudEntityadapter.removeOne(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    }

    case ActionTypes.CRUD_EMPLOYEE_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };

    default:
      return state;
  }
}
