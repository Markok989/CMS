import React, {PropTypes} from 'react';
import CoursePageFormList from './CoursePageFormList';

const CoursePageForm = ({coursePages}) => {
  return (
    <div>
      <p>Naslov</p>
<br/>
      <p>Tekst</p>
      <br/>
      <p>{coursePages.courseTitle}</p>
      {
        /*
      {coursePages.map(coursePage =>
        <CoursePageFormList key={coursePage.id} coursePage={coursePage}/>
      )}
    */
      }
    </div>
  );
};

CoursePageForm.propTypes = {
  coursePages: PropTypes.array.isRequired
};


export default CoursePageForm;

