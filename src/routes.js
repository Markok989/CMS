import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import Courses from './components/courses/Courses';
import CoursePage from './components/coursePage/CoursePage1';
//import LessonPage from './components/lesson/LessonPage';
import QuizPage from './components/quiz/QuizPage';
import QuizPlay from './components/quiz/Quiz';
import AboutPage from './components/about/AboutPage';
import PlayPage from './components/play/PlayPageList';
import PlayPageLessons from './components/play/PlayPageLessons';
import PlayPageContent from './components/play/PlayPageContent';
import Test from './components/courses/Test';
//
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="courses" component={Courses}/>
    <Route path="course" component={CoursePage}/>
    <Route path="course/:id" component={CoursePage}/>
    {/*<Route path="lesson" component={LessonPage}/>*/}
    <Route path="quiz" component={QuizPage}/>
    <Route path="quizplay/:id" component={QuizPlay}/>
    <Route path="about" component={AboutPage}/>
    <Route path="play" component={PlayPage}/>
    <Route path="playLesson" component={PlayPageLessons}/>
    <Route path="playContent" component={PlayPageContent}/>
    <Route path="test" component={Test}/>
    {/*<Route path="playList" component={PlayList} />
      */}
  </Route>
);
