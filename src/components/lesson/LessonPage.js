import React from 'react';
import QuizPage from '../quiz/QuizPage';
import {Link} from 'react-router';

class LessonPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h2>Lesoon Page</h2>
        <p>Lesson</p>
        <div>
          <p>Lesson content</p>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
          <p>Quiz for this lesson is here</p>
          <br/>
          <Link to="quiz" className="btn btn-primary btn-lg">Quiz/Next</Link>
        </div>
      </div>
    );
  }
}

export default LessonPage;
