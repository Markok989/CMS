import React, {PropTypes} from 'react';


const PlayPageContentListRow = ({jsChapter}) => {
  return (
    <div>
      <div>
        <div>
          <div className="grid">
            <div className="col-sm-4">
              <div className="panel panel-primary">
                <div className="panel-body">
                  {jsChapter.text}
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

PlayPageContentListRow.propTypes = {
  jsChapter: PropTypes.array.isRequired
};


export default PlayPageContentListRow;
