import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import TestList from './TestList';

class Test extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    const {courses, course} = this.props;

    return (
      <div>
        <div>
          <TestList courses={courses}/>
        </div>
        <br/>
        <br/>
      </div>
    );
  }
}

Test.propTypes = {
  courses: PropTypes.array.isRequired,
  course: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}


export default connect(mapStateToProps)(Test);

//, mapDispatchtoProps, ako nema automtski se pravi
