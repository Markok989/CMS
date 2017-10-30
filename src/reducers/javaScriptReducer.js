import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function javaScriptList(state = initialState.jsLists, action) {
  switch (action.type) {
    case types.LOAD_JAVASCRIPTLISTS_SUCCESS:
      return action.jsLists;

    case types.CREATE_JAVASCRIPTLIST_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.jsList)
      ];

    case types.UPDATE_JAVASCRIPTLIST_SUCCESS:
      return [
        ...state.filter(jsList => jsList.id !== action.jsList.id),
        Object.assign({}, action.jsList)
      ];

    default:
      return state;
  }
}
