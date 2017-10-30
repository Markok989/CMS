import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function jsLessonContents(state = initialState.jsChapters, action) {
  switch (action.type) {
    case types.LOAD_JAVASCRIPTLIST_CHAPTERS_SUCCESS:
      return action.jsChapters;

    case types.CREATE_JAVASCRIPTLIST_CHAPTER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.jsChapter)
      ];

    case types.UPDATE_JAVASCRIPTLIST_CHAPTER_SUCCESS:
      return [
        ...state.filter(jsLessonContent => jsLessonContent.id !== action.jsChapter.id),
        Object.assign({}, action.jsChapter)
      ];

    default:
      return state;
  }
}
