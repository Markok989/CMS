import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as coursePageActions from '../../actions/coursePageActions';
import {browserHistory} from 'react-router';
import CoursePageForm1 from './CoursePageForm1';

class CoursePage1 extends React.Component {
  constructor(props, context) {
    super(props, context);

  }


  render() {
    const {coursePages} = this.props;

    return (
      <div>
        <div>
          <h1>Course Detail</h1>
          <br/>
          <CoursePageForm1 coursePages={coursePages}/>
        </div>
        <br/>
        <br/>
      </div>
    );
  }
}

CoursePage1.propTypes = {
  coursePages: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log("provera za test" + JSON.stringify(state));
  return {
    coursePages: state.coursePages
  };
}

/*
function mapDispatchtoProps(dispatch) {
  return {

  }
}
*/
export default connect(mapStateToProps)(CoursePage1);

//, mapDispatchtoProps, ako nema automtski se pravi
