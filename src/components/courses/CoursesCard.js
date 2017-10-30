import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/coursesAction';

import CourseCardRows from './CoursesCardRow';

const CoursesCard = ({courses}) => {
  return (
    <div>
      {courses.map(course =>
        <CourseCardRows key={course.id} course={course}/>
      )}
    </div>
  );
};

CoursesCard.propTypes = {
  courses: PropTypes.array.isRequired
};


export default CoursesCard;

//, mapDispatchtoProps, ako nema automtski se pravi
