import { Crud2State, crudEntityadapter, initialState } from '@app/crud2/store/crud2-state.interface';
import { ActionTypes, Union } from '@app/crud2/store/crud2.actions';

export function crud2Reducer(state = initialState, action: Union): Crud2State {
  switch (action.type) {

    case ActionTypes.CRUD2_EMPLOYEE_LOAD_REQUEST:
    case ActionTypes.CRUD2_EMPLOYEE_CREATE_REQUEST:
    case ActionTypes.CRUD2_EMPLOYEE_UPDATE_REQUEST:
    case ActionTypes.CRUD2_EMPLOYEE_DELETE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }

    case ActionTypes.CRUD2_EMPLOYEE_LOAD_SUCCESS: {
      return crudEntityadapter.addAll(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    }

    case ActionTypes.CRUD2_EMPLOYEE_CREATE_OR_UPDATE_SUCCESS: {
      return crudEntityadapter.upsertOne(action.payload, {
        ...state,
        isLoading: false,
        error: null
      });
    }

    case ActionTypes.CRUD2_EMPLOYEE_DELETE_SUCCESS: {
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
