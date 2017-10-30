import React, {PropTypes} from 'react';



const PlayPageLessonListRow = ({jsList}) => {
  return (
    <div>
      <div>
        <div>
          <div className="grid">
            <div className="col-sm-4">
              <div className="panel panel-primary">
                <div className="panel-body">
                  {jsList.chapterName}
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

PlayPageLessonListRow.propTypes = {
  jsList: PropTypes.array.isRequired
};


export default PlayPageLessonListRow;
