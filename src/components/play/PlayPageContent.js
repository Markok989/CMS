import React, { PropTypes } from 'react';
import PagePlayContentList from './PagePlayContentList';
import { connect } from 'react-redux';

class PlayPageContent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { jsChapters } = this.props;
    return (
      <div>
        <p>Play Page</p>
        <PagePlayContentList jsChapters={jsChapters} />
      </div>
    );
  }
}

PlayPageContent.propTypes = {
  jsChapters: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    jsChapters: state.jsLessonContents
  };
}

export default connect(mapStateToProps)(PlayPageContent);
