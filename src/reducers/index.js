import {combineReducers} from 'redux';
import courses from './courseReducer';
import quizzes from './quizReducer';
import coursePages from './coursePageReducer';
import jsLists from './javaScriptReducer';
import jsChapters from './javaScriptChapterReducer';
//import ajaxCallsInProgress from './ajaxStatusReducer';


const rootReducer = combineReducers({
  courses,
  quizzes,
  coursePages,
  jsLists
 // jsChapters
  //,    ajaxCallsInProgress
});

export default rootReducer;
