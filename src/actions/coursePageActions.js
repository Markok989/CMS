import * as types from './actionTypes';
import coursePageApi from '../api/mockCoursePageApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursePagesSuccess(coursePages) {
  return {type: types.LOAD_COURSEPAGES_SUCCESS, coursePages};
}

export function loadCoursePages() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return coursePageApi.getAllCoursePages().then(coursePages => {
      dispatch(loadCoursePagesSuccess(coursePages));
    }).catch(error => {
      throw(error);
    });
  };
}
