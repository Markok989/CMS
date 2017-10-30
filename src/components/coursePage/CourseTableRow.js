import React, {PropTypes} from 'react';

const CourseTableRow = ({coursePages}) => {
  return (
    <div className="jumbotron">
      <tr>
        <td>
          {coursePages.lessonTitle}
        </td>
      </tr>
    </div>
  );
};

CourseTableRow.propTypes = {
  coursePages: PropTypes.array.isRequired
};

export default CourseTableRow;
