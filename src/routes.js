import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import Courses from './components/courses/Courses';
import CoursePage from './components/courses/CoursePage';
import LessonPage from './components/lesson/LessonPage';
import QuizPage from './components/quiz/QuizPage';
import QuizPlay from './components/quiz/Quiz';
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="courses" component={Courses}/>
    <Route path="course" component={CoursePage}/>
    <Route path="lesson" component={LessonPage}/>
    <Route path="quiz" component={QuizPage}/>
    <Route path="quizplay/:id" component={QuizPlay}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);
