import delay from './delay';

const lessons = [
    {
        lessonId: "javascript-building-applications",
        lessonTitle: "test Building Applications in JavaScript",
        cotent: "JavaScript"
    },
    {
        lessonId: "java-building-applications",
        lessonTitle: "test Building Applications in Java",
        cotent: "Java"
    },
    {
        lessonId: "c#-building-applications",
        lessonTitle: "test Building Applications in C#",
        cotent: "C#"
    },
    {
        lessonId: "react-redux-building-applications",
        lessonTitle: "test Building Applications in React and Redux",
        cotent: "JavaScript"
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (lesson) => {
    return replaceAll(lesson.lessonTitle, ' ', '-');
};

class LessonApi {
    static getAllLessons() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], lessons));
            }, delay);
        });
    }
}

export default LessonApi;