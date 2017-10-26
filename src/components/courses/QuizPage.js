import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { ButtonToolbar, Button } from 'react-bootstrap';
import AnswerPage from './answerPage';

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
        return (
            <div className="jumbotron" >
                <h2>Quiz Page</h2>
                <p>Text</p>
                <div>
                    <AnswerPage />
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
    dispatch: PropTypes.func.isRequired,
    quizzes: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        quizzes: state.quizzes
    };
}

export default connect()(QuizPage);
