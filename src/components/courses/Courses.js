import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CoursesGrid from './CoursesGrid';
import * as courseActions from '../../actions/courseAction';

class Courses extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {title: null}
    };
  }

  courseRow(course, index) {
    return (
      <div key={index}>
        {course.title}
      </div>);
  }

  render() {
    return (
      <div>
        <h1>All Courses</h1>
        <CoursesGrid/>
        {this.props.courses.map(this.courseRow)}
      </div>
    );
  }
}

Courses.propTypes={
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(Courses);

//, mapDispatchtoProps, ako nema automtski se pravi
