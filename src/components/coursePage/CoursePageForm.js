import React from 'react';

const CoursePageForm = ({coursePage}) => {
  return (
    <div>
      Naslov


      <p>{coursePage.courseTitle}</p>


      <br/>
      Tekst
      {
        /*
      <p>{coursePage.courseText}</p>
      */
      }
    </div>
  );
};

CoursePageForm.propTypes = {
  coursePage: React.PropTypes.object.isRequired
};

export default CoursePageForm;
