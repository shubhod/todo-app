const { database } = require(".");

export const DEFAULT_PATH = "todo-app/";
var dbRef = database.ref(DEFAULT_PATH);

const setPath = (path) => {
  if (path) dbRef = database.ref(path);
};
export const storeDbData = (data, path) => {
  setPath(path);
  dbRef.set(data);
};
export const readDbData = async (path) => {
  setPath(path);
  const data = await dbRef.once("value");
  return data.val();
};

export const removeDbData = async (path) => {
  setPath(path);
  dbRef.remove();
};
