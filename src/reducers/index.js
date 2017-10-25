import { combineReducers } from 'redux';
import courses from './courseReducer';
import lessons from './lessonReducer';
//import ajaxCallsInProgress from './ajaxStatusReducer';


const rootReducer = combineReducers({
    courses,
    lessons
    //,    ajaxCallsInProgress
});

export default rootReducer;
