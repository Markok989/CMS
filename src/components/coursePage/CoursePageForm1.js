import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CourseTable from './CourseTable';
import CourseField from './CourseField';

const CoursePageForm1 = ({coursePages}) => {
  console.log("kursProvera " + coursePages.courseTitle);
  return (
    <div>
      Naslov
      <br/>
      {/*
      {coursePages.map((coursePage) => {
        <CourseField key={coursePage.id} coursePages={coursePages}/>
      })}
      */
      }
      <p>{coursePages[0].courseTitle}</p>
      <p>{coursePages[0].courseText}</p>
      <br/>
    </div>
  );
};

CoursePageForm1.propTypes = {
  coursePages: PropTypes.object.isRequired
};

/*
function mapStateToProps(state, ownProps) {
  console.log("provera za testiranje" + JSON.stringify(state));
  return {
    coursePages: state.coursePages
  };
}
*/

export default //connect(mapStateToProps)
(CoursePageForm1);

//, mapDispatchtoProps, ako nema automtski se pravi
