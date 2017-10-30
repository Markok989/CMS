import React, {PropTypes} from 'react';


const TestListRow = ({proba}) => {
  return (
    <div>
      {proba.testiranje}
    </div>
  );
};

TestListRow.propTypes = {
  proba: PropTypes.array.isRequired
};


export default TestListRow;

//, mapDispatchtoProps, ako nema automtski se pravi
