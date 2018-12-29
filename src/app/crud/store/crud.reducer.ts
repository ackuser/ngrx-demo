import { crudEntityadapter, CrudState, initialState } from './crud-state.interface';
import { ActionTypes, Union } from './crud.actions';

export function crudReducer(state = initialState, action: Union): CrudState {
  switch (action.type) {

    case ActionTypes.CRUD_EMPLOYEE_LOAD:
    case ActionTypes.CRUD_EMPLOYEE_CREATE:
    case ActionTypes.CRUD_EMPLOYEE_UPDATE:
    case ActionTypes.CRUD_EMPLOYEE_DELETE:
    {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }

    case ActionTypes.CRUD_EMPLOYEE_LOAD_SUCCESS:
    {
      return crudEntityadapter.addAll(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    }

    case ActionTypes.CRUD_EMPLOYEE_CREATE_UPDATE_SUCCESS:
    {
      return crudEntityadapter.upsertOne(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    }

    case ActionTypes.CRUD_EMPLOYEE_DELETE_SUCCESS:
    {
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
