import delay from './delay';

const jsLists = [
  {
    id: "id",
    chapterName: "Owerview"
  },
  {
    id: "id1",
    chapterName: "Baisc Concepts"
  },
  {
    id: "id2",
    chapterName: "Functions"
  }
];


function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (jsLists) => {
  return replaceAll(jsLists.chapterName, ' ', '-');
};

class JsListsAPI {
  static getAllJsLists() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], jsLists));
      }, delay);
    });
  }

  static saveJsList(jsLists) {
    jsLists = Object.assign({}, jsLists); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minJsListTitleLength = 1;
        if (jsLists.chapterName.length < minJsListTitleLength) {
          reject(`Title must be at least ${minJsListTitleLength} characters.`);
        }

        if (jsLists.id) {
          const existingJsListIndex = jsLists.findIndex(a => a.id == jsLists.id);
          jsLists.splice(existingJsListIndex, 1, jsLists);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new jsLists in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          jsLists.id = generateId(jsLists);
          jsLists.watchHref = `http://www.pluralsight.com/jsLists/${jsLists.id}`;
          jsLists.push(jsLists);
        }

        resolve(jsLists);
      }, delay);
    });
  }

  static deleteJsList(JsListId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfJsListToDelete = jsLists.findIndex(jsLists => {
          jsLists.JsListId == JsListId;
        });
        jsLists.splice(indexOfJsListToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default JsListsAPI;

