import delay from './delay';

const quizzes = [
    {
        quizId: "quz-javascript-building-applications",
        quizTitle: "Quiz Building Applications in JavaScript",
        cotent: "JavaScript",
        questions: [
            {
                questionId: "1",
                question: "Question",
                answers: [{
                    answerId: "1",
                    answer: "Answer"
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