import * as types from './actionTypes';
import quizApi from '../api/mockQuizApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadQuizzesSuccess(quizzes) {
    return { type: types.LOAD_QUIZZES_SUCCESS, quizzes };
}

export function createQuizSuccess(quiz) {
    return { type: types.CREATE_QUIZ_SUCCESS, quiz };
}

export function updateQuizSuccess(quiz) {
    return { type: types.UPDATE_QUIZ_SUCCESS, quiz };
}

export function loadQuizzes() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return quizApi.getAllQuizzes().then(quizzes => {
            dispatch(loadQuizzesSuccess(quizzes));
        }).catch(error => {
            throw (error);
        });
    };
}

