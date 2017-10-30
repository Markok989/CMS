import * as types from './actionTypes';
import coursePageAPI from '../api/mockCoursePageApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursePagesSuccess(coursePages) {
  return {type: types.LOAD_COURSEPAGES_SUCCESS, coursePages};
}

export function createCoursePageSuccess(coursePage) {
  return {type: types.CREATE_COURSEPAGE_SUCCESS, coursePage};
}

export function updateCoursePageSuccess(coursePage) {
  return {type: types.UPDATE_COURSEPAGE_SUCCESS, coursePage};
}

export function loadCoursePages() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return coursePageAPI.getAllCoursePages().then(coursePages => {
      dispatch(loadCoursePagesSuccess(coursePages));
    }).catch(error => {
      throw (error);
    });
  };
}

