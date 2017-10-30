import React from 'react';
import CourseTableRow from './CourseTableRow';

const CourseTable = ({coursePages}) => {
  return (
    <div className="jumbotron">
      {coursePages.map(coursePage =>
        <CourseTableRow key={coursePage.id} coursePage={coursePage}/>
      )}
    </div>
  );
};


export default CourseTable;
