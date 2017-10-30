import * as types from './actionTypes';
import JsChaptersAPI from '../api/mockJsChapters';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadJsChaptersSuccess(jsChapters) {
  return {type: types.LOAD_JAVASCRIPTLIST_CHAPTERS_SUCCESS, jsChapters};
}


export function JsChapters() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return JsChaptersAPI.getAllJsChapters().then(jsChapters => {
      dispatch(loadJsChaptersSuccess(jsChapters));
    }).catch(error => {
      throw (error);
    });
  };
}

