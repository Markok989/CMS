import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/coursesAction';
import CourseField from './CourseField';
import CourseTable from './CourseTable';

import CoursePageForm from './CoursePageForm';

class CoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);

  }

  render() {
    const {coursePages} = this.props;

    return (
      <div>
        <div>
          <div className="jumbotron">
            <br/>
            <CoursePageForm coursePages={coursePages}/>
            <br/>
            <br/>
            <div>
              {coursePages.courseTitle}
            </div>
          </div>
        </div>
        <br/>
        <div>
          <div>
            Lessons: number of lessons
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}


CoursePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  coursePages: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log("provera za test" + JSON.stringify(state));
  return {
    coursePages: state.coursePages
  };
}

export default connect(mapStateToProps)(CoursePage);
