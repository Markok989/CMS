import React, {PropTypes} from 'react';

const CourseTableRow = ({coursePage}) => {
  return (
    <div className="jumbotron">
      <tr>
        <td>
          {coursePage.chapterTitle}
        </td>
      </tr>
    </div>
  );
};

CourseTableRow.propTypes = {
  coursePages: PropTypes.array.isRequired
};

export default CourseTableRow;
