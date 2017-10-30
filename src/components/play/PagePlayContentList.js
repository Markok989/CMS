import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import PlayPageContentListRow from './PlayPageContentListRow';

const PlayPageContentList = ({jsChapters}) => {
  return (
    <div>
      {jsChapters.map(jsChapter =>
        <PlayPageContentListRow key={jsChapter.id} jsLessonContent={jsChapter}/>
      )}
    </div>
  );
};

PlayPageContentList.propTypes = {
  jsChapters: PropTypes.array.isRequired
};


export default PlayPageContentList;

