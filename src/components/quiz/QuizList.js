import React, {PropTypes} from 'react';
import QuizListRow from './QuizListRow';
import {Table} from 'react-bootstrap';


const QuizList = ({quizzes}) => {
  return (
    <Table responsive>
      <table className="table">
        <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Number of questions</th>
        </tr>
        </thead>
        <tbody>
        {quizzes.map(quiz =>
          <QuizListRow key={quiz.id} quiz={quiz}/>
        )}
        </tbody>
      </table>
    </Table>
  );
};

QuizList.propTypes = {
  quizzes: PropTypes.array.isRequired
};

export default QuizList;

