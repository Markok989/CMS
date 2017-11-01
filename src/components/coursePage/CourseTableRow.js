import React, {PropTypes} from 'react';

const CourseTableRow = ({chapter}) => {
  return (
    <div className="jumbotron">
      <tr>
        <td>
          {chapter.chapterTitle}
        </td>
      </tr>
    </div>
  );
};

CourseTableRow.propTypes = {
  chapter: PropTypes.array.isRequired
};

export default CourseTableRow;
