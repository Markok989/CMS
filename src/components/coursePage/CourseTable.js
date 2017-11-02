import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CourseTableRow from './CourseTableRow';

const CourseTable = ({coursePages, chapters, chapter}) => {
  console.log("kursProvera " + coursePages.courseTitle);
  return (
    <div>
     Chapteri
      <br/>
      {coursePages.chapter.map(chapter=>{
       <CourseTableRow key={chapter.id} chapter={chapter}/>
      })}
      <p>{coursePages.courseText}</p>

    </div>
  );
};

CourseTable.propTypes = {
  coursePages: PropTypes.array.isRequired
};

/*
function mapStateToProps(state, ownProps) {
  console.log("provera za testiranje" + JSON.stringify(state));
  return {
    coursePages: state.coursePages
  };
}
*/

export default CourseTable;

//, mapDispatchtoProps, ako nema automtski se pravi
