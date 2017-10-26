import React, {PropTypes} from 'react';
import {Link} from 'react-router';




const QuizListRow = ({quiz}) => {
  return (
    <tr>
      <td>&nbsp;</td>
      <td><Link to={'/quizplay/'+ quiz.id}>{quiz.quizTitle}</Link></td>
      <td>{quiz.questions.length}</td>
    </tr>
  );
};

QuizListRow.propTypes = {
  quiz: PropTypes.object.isRequired
  //q: PropTypes.array.isRequired
};

export default QuizListRow;
