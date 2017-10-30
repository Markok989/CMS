import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/coursesAction';
import CourseCard from './CoursesCard';

class Courses extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    const { courses, course } = this.props;

    return (
      <div>
        <h1>All Courses</h1>
        <div>
          <CourseCard courses={courses} />
        </div>
        <br />
        <br />
      </div>
    );
  }
}

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
  course: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

/*
function mapDispatchtoProps(dispatch) {
  return {

  }
}
*/
export default connect(mapStateToProps)(Courses);

//, mapDispatchtoProps, ako nema automtski se pravi
