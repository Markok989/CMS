import React, { PropTypes } from 'react';
import PlayPageLessonList from './PlayPageLessonList';
import { connect } from 'react-redux';

class PlayPageList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { jsLists } = this.props;
    return (
      <div>
        <p>Play Page</p>
        <PlayPageLessonList jsLists={jsLists} />
      </div>
    );
  }
}

PlayPageList.propTypes = {
  jsLists: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    jsLists: state.jsLists
  };
}

export default connect(mapStateToProps)(PlayPageList);
