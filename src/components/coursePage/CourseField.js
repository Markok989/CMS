import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

const CourseField = ({coursePage}) => {
  console.log("kursProvera " + coursePage.courseTitle);
  return (
    <div>
      Naslov
      <br/>
      <p>{coursePage.courseTitle}</p>
      <p>{coursePage.courseText}</p>
      <br/>
    </div>
  );
};

CourseField.propTypes = {
  coursePage: PropTypes.array.isRequired
};

/*
function mapStateToProps(state, ownProps) {
  console.log("provera za testiranje" + JSON.stringify(state));
  return {
    coursePages: state.coursePages
  };
}
*/

export default CourseField;

//, mapDispatchtoProps, ako nema automtski se pravi
