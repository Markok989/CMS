import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as coursePageActions from '../../actions/coursePageActions';
import CoursePageForm from './CoursePageForm';


class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course)
    };

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  render() {
    const {coursePages} = this.props;
    return (
      <div>
        <h2>Course Page</h2>
        <br/>
        <CoursePageForm
          coursePage={this.state.coursePage}/>
      </div>
    );
  }
}

CoursePage.propTypes = {
  coursePage: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function getCoursePageById(coursePages, id) {
  const coursePage = coursePages.filter(coursePage => coursePage.id == id);
  if (coursePage) return coursePage[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  console.log("provera za Kurs" + JSON.stringify(state));

  const coursePageId = ownProps.params.id;

  let coursePage = {id: '', courseTitle: '', courseText: ''};

  if (coursePageId && state.coursePages.length > 0) {
    coursePage = getCoursePageById(state.courses, coursePageId);
  }

  return {
    coursePage: state.coursePage
  };

}

export default connect(mapStateToProps)(CoursePage);
