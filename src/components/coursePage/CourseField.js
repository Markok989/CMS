import React, { PropTypes } from 'react';
import CourseFieldRow from './CourseFieldRow';

const CourseField = ({ coursePages }) => {
  return (
    <div className="jumbotron">
      {coursePages.map(coursePage =>
        <CourseFieldRow key={coursePage.id} coursePage={coursePage} />
      )}
    </div>
  );
};

CourseField.propTypes = {
  coursePages: PropTypes.array.isRequired
};

export default CourseField;
