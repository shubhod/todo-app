export const convertToArray = (data) => {
  var  todoList = [];
  if(data)
  Object.keys(data).map((key) => {
    const { _id, text, isCompleted } = data[key];
    todoList.push({ _id, text, isCompleted });
  });
  return todoList;
};
