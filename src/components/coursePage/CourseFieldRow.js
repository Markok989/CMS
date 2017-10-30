import React from 'react';

const CourseFieldRow = ({coursePage}) => {
  return (
    <div className="jumbotron">
      <div>
        Course title
      </div>
      <br/>
      <br/>
      <br/>
      <div>
        {coursePage.lessonTitle}
      </div>
    </div>
  );
};

export default CourseFieldRow;
