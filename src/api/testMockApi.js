/*
import delay from './delay';

const courses = [
    {
        // prvi deo kurs kurs
        id: "javascript-building-applications",
        title: "Building Applications in JavaScript",
        category: "JavaScript",
        lesssons: [
            {
                // drugi deo  lekcija thumbnail lekcije
                id: "javascript-building-applications",
                lessonTitle: "test Building Applications in JavaScript",
                lessonContent: [
                    {
                        // treci deo sadrzaj lekcije contnet 
                        lessonId: "javascript-building-applications",
                        id: "id",
                        lessonName: "Lesson Name",
                        lessonNo: "1",
                        lessonText: "Text 1"
                    },
                    {
                        // treci deo sadrzaj lekcije
                        lessonId: "javascript-building-applications",
                        id: "id",
                        lessonName: "Lesson Name",
                        lessonNo: "2",
                        lessonText: "Text 2"
                    },
                    {
                        // treci deo sadrzaj lekcije
                        lessonId: "javascript-building-applications",
                        id: "id",
                        lessonName: "Lesson Name",
                        lessonNo: "3",
                        lessonText: "Text"
                    },
                    {
                        // treci deo sadrzaj lekcije
                        lessonId: "javascript-building-applications",
                        id: "id",
                        lessonName: "Lesson Name",
                        lessonNo: "4",
                        lessonText: "Text"
                    },
                    {
                        // treci deo sadrzaj lekcije
                        lessonId: "javascript-building-applications",
                        id: "id",
                        lessonName: "Lesson Name",
                        lessonNo: "5",
                        lessonText: "Text"
                    },
                    {
                        // treci deo sadrzaj lekcije
                        lessonId: "javascript-building-applications",
                        id: "id",
                        lessonName: "Lesson Name",
                        lessonNo: "6",
                        lessonText: "Text"
                    }
                ]
            }
        ]
    },
    {
        // prvi deo kurs
        id: "java-building-applications",
        title: "Building Applications in Java",
        category: "Java"
    },
    {
        // prvi deo kurs
        id: "c#-building-applications",
        title: "Building Applications in C#",
        category: "C#"
    },
    {
        // prvi deo kurs
        id: "Building-WebSite-in-HTML",
        title: "Building WebSite in HTML",
        category: "HTML"
    },
    {
        // prvi deo kurs
        id: "Design-WebSite-with-Bootstrap",
        title: "Design WebSite with Bootstrap",
        category: "HTML, Bootstrap"
    },
    {
        // prvi deo kurs
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