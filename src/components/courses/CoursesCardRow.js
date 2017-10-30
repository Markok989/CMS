import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/coursesAction';


const CoursesCardRow = ({course}) => {
  return (
    <div>
      <div>
        <div>
          <div className="grid">
            <div className="col-sm-4">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  {course.title}
                </div>
                <div className="panel-body">
                  picture/text proba
                </div>
                <div className="panel-footer">
                  {course.category}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  );
};

CoursesCardRow.propTypes = {
  course: PropTypes.array.isRequired
};


export default CoursesCardRow;

//, mapDispatchtoProps, ako nema automtski se pravi
