import React, {PropTypes} from 'react';

const LessonPageForm = ({coursePages}) => {
  return (
    <div>
      <p>Naslov Lekcije</p>
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

LessonPageForm.propTypes = {
  coursePages: PropTypes.array.isRequired
};


export default LessonPageForm;

