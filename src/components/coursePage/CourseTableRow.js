import React, {PropTypes} from 'react';


const CourseTableRow = ({coursePages, chapters, chapter}) => {
 // console.log("kursProvera " + coursePages.courseTitle);
  return (
    <div>
      Chapteri
      <br/>
      <p>{chapter.chapterTitle}</p>
    </div>
  );
};

CourseTableRow.propTypes = {
  chapter: PropTypes.array.isRequired
};

/*
function mapStateToProps(state, ownProps) {
  console.log("provera za testiranje" + JSON.stringify(state));
  return {
    coursePages: state.coursePages
  };
}
*/

export default CourseTableRow;

//connect(mapStateToProps)
//, mapDispatchtoProps, ako nema automtski se pravi
