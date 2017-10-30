import React, {PropTypes} from 'react';
import TestListRow from './TestListRow';


const TestList = ({courses, proba}) => {
  return (
    <div>
      {courses.proba.map(proba =>
        <TestListRow key={proba.id} course={proba}/>
      )}
    </div>
  );
};

TestList.propTypes = {
  courses: PropTypes.array.isRequired,
  proba: PropTypes.array.isRequired
};


export default TestList;

//, mapDispatchtoProps, ako nema automtski se pravi
