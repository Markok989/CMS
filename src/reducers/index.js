import { combineReducers } from 'redux';
import courses from './courseReducer';
import lessons from './lessonReducer';
import quizzes from './quizReducer';
//import ajaxCallsInProgress from './ajaxStatusReducer';


const rootReducer = combineReducers({
    courses,
    lessons,
    quizzes
    //,    ajaxCallsInProgress
});

export default rootReducer;
