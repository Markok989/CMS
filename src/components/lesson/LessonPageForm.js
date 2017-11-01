import React, {PropTypes} from 'react';

const LessonPageForm = ({courseChapter}) => {
  return (
    <div>
      <p>Naslov Lekcije</p>
      <br/>
      <p>Tekst</p>
      <br/>
      <p>{courseChapter.courseTitle}</p>
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
  courseChapter: PropTypes.array.isRequired
};


export default LessonPageForm;

