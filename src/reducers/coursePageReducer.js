import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function coursePageReducer(state = initialState.coursePages, action) {
  switch (action.type) {
    case types.LOAD_COURSEPAGES_SUCCESS:
      return action.coursePages;



    default:
      return state;
  }
}
