import React from 'react';
import {Panel, ButtonToolbar, ListGroup, Button} from 'react-bootstrap';

const Question = ({
                    question,
                    index,
                    onAnswerSelected,
                    onSubmit
                  }) => {
  return (
    <div>
      <Panel header={question.question} bsStyle="info">
        <ListGroup componentClass="ul">
          <ol type="a">
            {question.answers.map((answer, i) =>
              <Panel>
                <li key={`${index}-${i}`}>
                  {console.log(answer)}
                  <input type="radio" name={`question_${index}`} id={`question_${index}_answer_${i}`}
                         defaultChecked={false} value={i} onChange={onAnswerSelected}/>
                  {' '}
                  <label htmlFor={`question_${index}_answer_${i}`}>{answer.label}</label>
                </li>
              </Panel>
            )}
          </ol>
        </ListGroup>
      </Panel>
      <ButtonToolbar>
        <Button bsStyle="success" bsSize="large" onClick={onSubmit} active>Submit</Button>
      </ButtonToolbar>
    </div>
  );
}

export default Question;
