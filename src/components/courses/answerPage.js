import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { ButtonToolbar, Button } from 'react-bootstrap';

class AnswerPage extends React.Component {


    render() {
        return (
            <div className="jumbotron" >
                <h2>AnswerPage</h2>
                <p>Text</p>
                <div>
                    <p>Quiz text</p>
                </div>
                <br />
                <br />
                <ButtonToolbar>
                    <Button bsStyle="success" bsSize="large" active>
                        Submit Answer
                        </Button>
                </ButtonToolbar>

            </div>
        );
    }
}




export default (AnswerPage);
