import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as coursePageActions from '../../actions/coursePageActions';
import {bindActionCreators} from 'redux';
import CourseField from './CourseField';
import CourseTable from './CourseTable';

import CoursePageForm from './CoursePageForm';

class CoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      coursePage: Object.assign({}, props.coursePage)
    };

  }


  render() {
    const {coursePages} = this.props;

    //console.log(coursePages.courseTitle + "provera za naslov");

    return (
      <div>
        <div>
          <div className="jumbotron">
            <br/>
            <CoursePageForm coursePages={coursePages}/>
            <br/>
            <br/>
            <div>
              {
                /*
              <CourseField coursePages={coursePages} />
              */
              }
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
  coursePages: PropTypes.array.isRequired,
  coursePage: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
 // let coursePage = {id: '', courseTitle: '', courseText: ''};

  console.log("provera za test" + JSON.stringify(state));
  return {
    coursePage: state.coursePage
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(coursePageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
