import * as types from './actionTypes';
import lessonApi from '../api/mockLessonApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadLessonsSuccess(lessons) {
    return { type: types.LOAD_LESSONS_SUCCESS, lessons };
}

export function createLessonSuccess(lesson) {
    return { type: types.CREATE_LESSON_SUCCESS, lesson };
}

export function updateLessonSuccess(lesson) {
    return { type: types.UPDATE_LESSON_SUCCESS, lesson };
}

export function loadLessons() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return lessonApi.getAllLessons().then(lessons => {
            dispatch(loadLessonsSuccess(lessons));
        }).catch(error => {
            throw (error);
        });
    };
}

