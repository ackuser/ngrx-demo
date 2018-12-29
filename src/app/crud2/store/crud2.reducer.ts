import { Crud2State, crudEntityadapter, initialState } from './crud2-state.interface';
import { ActionTypes, Union } from './crud2.actions';

export function crud2Reducer(state = initialState, action: Union): Crud2State {
  switch (action.type) {

    case ActionTypes.CRUD2_EMPLOYEE_LOAD:
    case ActionTypes.CRUD2_EMPLOYEE_CREATE:
    case ActionTypes.CRUD2_EMPLOYEE_UPDATE:
    case ActionTypes.CRUD2_EMPLOYEE_DELETE:
    {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }

    case ActionTypes.CRUD2_EMPLOYEE_LOAD_SUCCESS:
    {
      return crudEntityadapter.addAll(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    }

    case ActionTypes.CRUD2_EMPLOYEE_CREATE_UPDATE_SUCCESS:
    {
      return crudEntityadapter.upsertOne(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    }

    case ActionTypes.CRUD2_EMPLOYEE_DELETE_SUCCESS:
    {
      return crudEntityadapter.removeOne(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    }

    case ActionTypes.CRUD2_EMPLOYEE_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };

    default:
      return state;
  }
}