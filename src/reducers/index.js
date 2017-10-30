import {combineReducers} from 'redux';
import courses from './courseReducer';
import quizzes from './quizReducer';
import coursePages from './coursePageReducer';

//import ajaxCallsInProgress from './ajaxStatusReducer';


const rootReducer = combineReducers({
  courses,
  quizzes,
  coursePages
});

export default rootReducer;
//,    ajaxCallsInProgress
