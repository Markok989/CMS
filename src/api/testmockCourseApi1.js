/*
import delay from './delay';

const courses = [
    {
        id: "javascript-building-applications",
        title: "Building Applications in JavaScript",
        category: "JavaScript"
       /* lesssons: [
            {
            lessonID: "1",
            lessonNo: "1",
            lessonTitle: "test Building Applications in JavaScript",
            cotent: "JavaScript"
        },
        {
            lessonID: "1",
            lessonNo: "1",
            lessonTitle: "test Building Applications in JavaScript",
            cotent: "JavaScript"
        }
        ]*/
        /*
    },
    {
        id: "java-building-applications",
        title: "Building Applications in Java",
        category: "Java"
    },
    {
        id: "c#-building-applications",
        title: "Building Applications in C#",
        category: "C#"
    },
    {
        id: "Building-WebSite-in-HTML",
        title: "Building WebSite in HTML",
        category: "HTML"
    },
    {
        id: "Design-WebSite-with-Bootstrap",
        title: "Design WebSite with Bootstrap",
        category: "HTML, Bootstrap"
    },
    {
        id: "react-redux-building-applications",
        title: "Building Applications in React and Redux",
        category: "JavaScript"
    }
];


function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
    return replaceAll(course.title, ' ', '-');
};

class CourseApi {
    static getAllCourses() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], courses));
            }, delay);
        });
    }

    static saveCourse(course) {
        course = Object.assign({}, course); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minCourseTitleLength = 1;
                if (course.title.length < minCourseTitleLength) {
                    reject(`Title must be at least ${minCourseTitleLength} characters.`);
                }

                if (course.id) {
                    const existingCourseIndex = courses.findIndex(a => a.id == course.id);
                    courses.splice(existingCourseIndex, 1, course);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    course.id = generateId(course);
                    course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
                    courses.push(course);
                }

                resolve(course);
            }, delay);
        });
    }

    static deleteCourse(courseId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfCourseToDelete = courses.findIndex(course => {
                    course.courseId == courseId;
                });
                courses.splice(indexOfCourseToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default CourseApi;
*/