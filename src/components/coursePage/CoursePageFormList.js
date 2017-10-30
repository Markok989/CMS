import React, {PropTypes} from 'react';



const CoursePageFormList = ({coursePage}) => {
  return (
    <div>
      <div className="jumbotron">
        <div>
          {coursePage.courseTitle}
        </div>
        <br/>
        <br/>
        <br/>
        <div>
          {coursePage.courseText}
        </div>
      </div>
    </div>
  );
};

CoursePageFormList.propTypes = {
  coursePage: PropTypes.array.isRequired
};


export default CoursePageFormList;

//, mapDispatchtoProps, ako nema automtski se pravi
