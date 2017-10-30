import delay from './delay';

const coursePages = [
  {
    // polje
    id: "javascript-building-applications",
    courseTitle: "JavaScript Tutorial",
    courseText: "Text about JavaScript",
    chapters: [
      {
        // chapter
        id: "JavaScript Tutorial",
        chapterTitle: "Module 1: Overview",
        chapterLessons: [
          {
            // sadrzaj liste
            id: "1",
            lessonName: "uvod u skriptu 1"
          },
          {
            // sadrzaj liste
            id: "2",
            lessonName: "uvod u skriptu 2 "
          },
          {
            // sadrzaj liste
            id: "3",
            lessonName: "uvod u skriptu 3"
          }
        ]
      },
      {
        // chapter
        id: "JavaScript Tutorial",
        chapterTitle: "Module 1: Overview",
        chapterLessons: [
          {
            // sadrzaj liste
            id: "1",
            lessonName: "skriptu 1"
          },
          {
            // sadrzaj liste
            id: "2",
            lessonName: " skriptu 2 "
          },
          {
            // sadrzaj liste
            id: "3",
            lessonName: " u skriptu 3"
          }
        ]
      }
    ]
  },
  {
    // polje
    id: "java-building-applications",
    courseTitle: "JavaTutorial",
    courseText: "Text about Java",
    chapters: [
      {
        // chapter
        id: "JavaScript Tutorial",
        chapterTitle: "Module 1: Overview",
        chapterLessons: [
          {
            // sadrzaj liste
            id: "1",
            lessonName: "uvod u skriptu 1"
          },
          {
            // sadrzaj liste
            id: "2",
            lessonName: "uvod u skriptu 2 "
          },
          {
            // sadrzaj liste
            id: "3",
            lessonName: "uvod u skriptu 3"
          }
        ]
      },
      {
        // chapter
        id: "JavaScript Tutorial",
        chapterTitle: "Module 1: Overview",
        chapterLessons: [
          {
            // sadrzaj liste
            id: "1",
            lessonName: "skriptu 1"
          },
          {
            // sadrzaj liste
            id: "2",
            lessonName: " skriptu 2 "
          },
          {
            // sadrzaj liste
            id: "3",
            lessonName: " u skriptu 3"
          }
        ]
      }
    ]
  },
  {
    // polje
    id: "c#-building-applications",
    courseTitle: "C# Tutorial",
    courseText: "Text about C#",
    chapters: [
      {
        // chapter
        id: "JavaScript Tutorial",
        chapterTitle: "Module 1: Overview",
        chapterLessons: [
          {
            // sadrzaj liste
            id: "1",
            lessonName: "uvod u skriptu 1"
          },
          {
            // sadrzaj liste
            id: "2",
            lessonName: "uvod u skriptu 2 "
          },
          {
            // sadrzaj liste
            id: "3",
            lessonName: "uvod u skriptu 3"
          }
        ]
      },
      {
        // chapter
        id: "JavaScript Tutorial",
        chapterTitle: "Module 1: Overview",
        chapterLessons: [
          {
            // sadrzaj liste
            id: "1",
            lessonName: "skriptu 1"
          },
          {
            // sadrzaj liste
            id: "2",
            lessonName: " skriptu 2 "
          },
          {
            // sadrzaj liste
            id: "3",
            lessonName: " u skriptu 3"
          }
        ]
      }
    ]
  }
];


class CoursePagesAPI {
  static getAllCoursePages() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], coursePages));
      }, delay);
    });
  }

}

export default CoursePagesAPI;
