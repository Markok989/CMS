{/*
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import LessonPageForm from './LessonPageForm';

class LessonPage extends React.Component {
  render() {
    const {courseChapters, courseChapter} = this.props;
    
    return (
      <div className="jumbotron">
        <h2>Lesoon Page</h2>
        <p>Lesson</p>
        <div>
          <p>Lesson content</p>
          <br />
          <LessonPageForm />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
          <p>Quiz for this lesson is here</p>
          <br />
          <Link to="quiz" className="btn btn-primary btn-lg">Quiz/Next</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let courseChapter = { id: '', courseTitle: '', courseText: '' };

  console.log("provera za test" + JSON.stringify(state));
  return {
    courseChapters: courseChapters
  };
}

export default connect(mapStateToProps)(LessonPage);

*/}