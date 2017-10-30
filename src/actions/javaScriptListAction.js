import * as types from './actionTypes';
import JsListsAPI from '../api/mockJSLessonListApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadJsListsSuccess(jsLists) {
  return { type: types.LOAD_JAVASCRIPTLISTS_SUCCESS, jsLists };
}

export function createJsListSuccess(jsLists) {
  return { type: types.CREATE_JAVASCRIPTLIST_SUCCESS, jsLists };
}

export function updateJsListSuccess(jsList) {
  return { type: types.UPDATE_JAVASCRIPTLIST_SUCCESS, jsList };
}

export function loadJsLists() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return JsListsAPI.getAllJsLists().then(jsLists => {
      dispatch(loadJsListsSuccess(jsLists));
    }).catch(error => {
      throw (error);
    });
  };
}

