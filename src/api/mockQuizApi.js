import delay from './delay';

const quizzes = [
  {
    id: "quz-javascript-building-applications",
    quizTitle: "Quiz Building Applications in JavaScript",
    cotent: "JavaScript",
    questions: [
      {
        id: "1",
        question: "Question 1",
        answers: [
          {
            questionId: "1",
            id: "1.1",
            label: "Answer 1",
            isTrue: true
          },
          {
            questionId: "1",
            id: "1.2",
            label: "Answer 2",
            isTrue: false
          },
          {
            questionId: "1",
            id: "1.3",
            label: "Answer 3",
            isTrue: false
          }
        ]
      },
      {
        id: "2",
        question: "Question 2",
        answers: [
          {
            questionId: "2",
            id: "2.1",
            label: "Answer 1",
            isTrue: true
          },
          {
            questionId: "2",
            id: "2.2",
            label: "Answer 3",
            isTrue: false
          },
          {
            questionId: "2",
            id: "2.3",
            label: "Answer 3",
            isTrue: false
          }
        ]
      },
      {
        id: "3",
        question: "Question 3",
        answers: [
          {
            questionId: "3",
            id: "3.1",
            label: "Answer 1",
            isTrue: true
          },
          {
            questionId: "3",
            id: "3.2",
            label: "Answer 2",
            isTrue: false
          },
          {
            questionId: "3",
            id: "3.3",
            label: "Answer 3",
            isTrue: false
          }
        ]
      }
    ]
  }
  /*
  {
      lessonId: "java-building-applications",
      lessonTitle: "test Building Applications in Java",
      cotent: "Java",
      lessonNo: "2"
  },
  {
      lessonId: "c#-building-applications",
      lessonTitle: "test Building Applications in C#",
      cotent: "C#",
      lessonNo: "3"
  },
  {
      lessonId: "react-redux-building-applications",
      lessonTitle: "test Building Applications in React and Redux",
      cotent: "JavaScript",
      lessonNo: "4"
  }
  */
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (quiz) => {
  return replaceAll(quiz.quizTitle, ' ', '-');
};

class QuizApi {
  static getAllQuizzes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], quizzes));
      }, delay);
    });
  }
}

export default QuizApi;
