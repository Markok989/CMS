import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function coursePageReducer(state = initialState.coursePages, action) {
  switch (action.type) {
    case types.LOAD_COURSEPAGES_SUCCESS:
      return action.coursePages;

    case types.CREATE_COURSEPAGE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.coursePage)
      ];

    case types.UPDATE_COURSEPAGE_SUCCESS:
      return [
        ...state.filter(coursePage => coursePage.id !== action.coursePage.id),
        Object.assign({}, action.coursePage)
      ];

    default:
      return state;
  }
}
