import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { ButtonToolbar, Button } from 'react-bootstrap';
import QuizList from './QuizList';

class QuizPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      quiz: {
        quizTitle: null,
        quizId: null
      }
    };
  }

  quizRow(quiz, index) {
    return (
      <div key={index}>
        {quiz.quizTitle}
      </div>
    );
  }

  render() {
    const {quizzes} = this.props;

    return (
      <div className="jumbotron">
        <h2>Quiz Page</h2>
        <p>Text</p>
        <div>
          <QuizList quizzes={quizzes} />
        </div>
        <br />
        <div>
          <p>Score: </p>
        </div>
        <br />
      </div>
    );
  }
}

QuizPage.propTypes = {
  quizzes: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    quizzes: state.quizzes
  };
}

export default connect(mapStateToProps)(QuizPage);
