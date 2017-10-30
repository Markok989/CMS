import delay from './delay';

const jsChapters = [
  {
    id: "id",
    text: "Owerview"
  },
  {
    id: "id1",
    text: "Baisc Concepts"
  },
  {
    id: "id2",
    text: "Functions"
  }
];


function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (jsChapters) => {
  return replaceAll(jsChapters.chapterName, ' ', '-');
};

class JsChaptersAPI {
  static getAllJsChapters() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], jsChapters));
      }, delay);
    });
  }


  static deleteJsChapters(JsChaptersId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfJsChaptersToDelete = jsChapters.findIndex(jsChapters => {
          jsChapters.JsChaptersId == JsChaptersId;
        });
        jsChapters.splice(indexOfJsChaptersToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default JsChaptersAPI;

