import delay from './delay';

const courses = [
  {
    // kurs
    id: "javascript-building-applications",
    title: "Building Applications in JavaScript",
    category: "JavaScript"
    /*
    ,
    proba: [
      {
        testID: "id",
        testiranje: "proba"
      }
    ]
    */
  },
  {
    // prvi deo kurs
    id: "java-building-applications",
    title: "Building Applications in Java",
    category: "Java"
    /*
    ,
    proba: [
      {
        testID: "id1",
        testiranje: "proba1"
      }
    ]
    */
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

}

export default CourseApi;


/*
  lesssons: [
    {
      // drugi deo  lekcija thumbnail
      id: "javascript-building-applications",
      lessonTitle: "test Building Applications in JavaScript",
      lessonNo: "Lesson 1"
      /*
      lessonContent: [
        {
          // treci deo sadrzaj lekcije
          lessonId: "javascript-building-applications",
          id: "id",
          lessonName: "Lesson Name",
          lectureNo: "1",
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
      */
