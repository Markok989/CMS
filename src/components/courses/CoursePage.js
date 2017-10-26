import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseAction';

class CoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      lesson: { lessonTitle: null }
    };
  }

  lessonRow(lesson, index) {
    return (
      <div key={index}>
        {lesson.lessonTitle}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h2>Course Name</h2>
          <p>Course Lessons</p>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="panel panel-primary">
                  <div className="panel-body">
                    picture/text
                </div>
                  <div className="panel-footer">
                    Lesson
                </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="panel panel-primary">
                  <div className="panel-body">
                    picture/text
                </div>
                  <div className="panel-footer">
                    Lesson
                </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="panel panel-primary">
                  <div className="panel-body">
                    picture/text
                </div>
                  <div className="panel-footer">
                    Lesson
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="panel panel-primary">
                  <div className="panel-body">
                    picture/text
                </div>
                  <div className="panel-footer">
                    Lesson
                </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="panel panel-primary">
                  <div className="panel-body">
                    picture/text
                </div>
                  <div className="panel-footer">
                    Lesson
                </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="panel panel-primary">
                  <div className="panel-body">
                    picture/text
                </div>
                  <div className="panel-footer">
                    Lesson
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

CoursePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  lessons: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    lessons: state.lessons
  };
}

export default CoursePage;
