import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import PlayPageLessonListRow from './PlayPageLessonListRow';

const PlayPageLessonList = ({jsLists}) => {
  return (
    <div>
      {jsLists.map(jsList =>
        <PlayPageLessonListRow key={jsList.id} jsList={jsList}/>
      )}
    </div>
  );
};

PlayPageLessonList.propTypes = {
  jsLists: PropTypes.array.isRequired
};


export default PlayPageLessonList;

