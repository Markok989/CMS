import React, {PropTypes} from 'react';
import {Link} from 'react-router';


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
                  <Link to={'/course/' + course.id}>
                    picture/text proba
                  </Link>
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
