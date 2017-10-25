import React, { PropTypes } from 'react';

class CoursesGrid extends React.Component {

  courseRow(course, index) {
    return (
      <div key={index}>
        {course.title}
      </div>);
  }

  render() {
    return (
      <div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  Course
                </div>
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
                <div className="panel-heading">
                  Course
                </div>
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
                <div className="panel-heading">
                  Course
                </div>
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
                <div className="panel-heading">
                  Course
                </div>
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
                <div className="panel-heading">
                  Course
                </div>
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
                <div className="panel-heading">
                  Course
                </div>
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

export default CoursesGrid;
