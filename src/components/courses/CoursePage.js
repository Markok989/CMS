import React from 'react';
import {Link} from 'react-router';

class CoursePage extends React.Component {
  render() {
    return (
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
    );
  }
}

export default CoursePage;
