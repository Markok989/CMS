import React, {PropTypes} from 'react';

const CourseFieldRow = ({coursePage}) => {
  return (
    <div className="jumbotron">
      <div>
        {coursePage.courseTitle}
      </div>
      <br/>
      <br/>
      <br/>
      <div>
        {coursePage.courseText}
      </div>
    </div>
  );
};
CourseFieldRow.propTypes = {
  coursePage: PropTypes.array.isRequired
};

export default CourseFieldRow;
