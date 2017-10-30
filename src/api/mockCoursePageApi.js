import delay from './delay';

const coursePages = [
  {
    // polje
    id: "JavaScript Tutorial",
    courseTitle: "JavaScript Tutorial",
    courseText: "Text about JavaScript"
  },
  {
    // lista lekcija
    id: "JavaScript Tutorial1",
    lessonTitle: "Module 1: Overview"
  },
  {
    id: "JavaScript Tutorial2",
    lessonTitle: "Module 2: Overview"
  }
];


function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (coursePages) => {
  return replaceAll(coursePages.courseTitle, ' ', '-');
};

class CoursePagesAPI {
  static getAllCoursePages() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], coursePages));
      }, delay);
    });
  }

  static saveCoursePage(coursePages) {
    coursePages = Object.assign({}, coursePages); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCoursePageTitleLength = 1;
        if (coursePages.title.length < minCoursePageTitleLength) {
          reject(`Title must be at least ${minCoursePageTitleLength} characters.`);
        }

        if (coursePages.id) {
          const existingCoursePageIndex = coursePages.findIndex(a => a.id == coursePages.id);
          coursePages.splice(existingCoursePageIndex, 1, coursePages);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new coursePages in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          coursePages.id = generateId(coursePages);
          coursePages.watchHref = `http://www.pluralsight.com/coursePages/${coursePages.id}`;
          coursePages.push(coursePages);
        }

        resolve(coursePages);
      }, delay);
    });
  }

  static deleteCoursePage(CoursePageId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCoursePageToDelete = coursePages.findIndex(coursePages => {
          coursePages.CoursePageId == CoursePageId;
        });
        coursePages.splice(indexOfCoursePageToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CoursePagesAPI;
