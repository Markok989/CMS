import React from 'react';
import CourseTableRow from './CourseTableRow';

const CourseTable = ({coursePages, chapters}) => {
  return (
    <div className="jumbotron">
      {coursePages.chapters.map((chapter) =>
        <CourseTableRow key={chapter.id} chapter={chapter}/>
      )}
    </div>
  );
};


export default CourseTable;
