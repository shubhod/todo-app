import React from "react";
import Todo from "../../components/todo/todo-component";
import { useState, useEffect, useRef } from "react";
import {
  readDbData,
  storeDbData,
  removeDbData,
  DEFAULT_PATH,
} from "../../firebase /crud-methods";
import { convertToArray } from "./methods";

const TodoScreen = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoCount, setTodoCount] = useState(0);
  const [searchResult, setSearchResult] = useState(null);
  const [isTextAreaHidden, setTextAreaHidden] = useState(false);
  const textAreaRef = useRef();

  useEffect(() => {
    (async () => {
      let todoList = await readDbData();
      let todoCount=await readDbData("todo-count");
      setTodoCount(todoCount.count);
      setTodoList(convertToArray(todoList));
    })();
  }, []);

  useEffect(() => {
    textAreaRef.current.focus();
  }, [searchResult]);

  const assignUniqueId = () => {
    return new Date().getTime();
  };

  const updateCount = (add) => {
    let updatedCount;
    if (add) {
      updatedCount = todoCount + 1;
      setTodoCount(updatedCount);
    } else {
      updatedCount = todoCount - 1;
      setTodoCount(updatedCount);
    }
    storeDbData({ count: updatedCount }, "todo-count/");
  };

  const addTodo = () => {
    let textAreaValue = textAreaRef.current.value;
    textAreaRef.current.value = null;
    textAreaRef.current.focus();

    if (textAreaValue.length > 0) {
      let todoItem = {
        _id: assignUniqueId(),
        text: textAreaValue,
        isCompleted: false,
      };
      setTodoList((todoList) => {
        return [...todoList, todoItem];
      });
      storeDbData(todoItem,`${DEFAULT_PATH}${todoItem._id}`);
    } else {
      alert("please enter some value in the todo");
      textAreaRef.current.focus();
    }
  };

  const deleteInstance = (id) => {
    return (list, callBack) => {
      if (list) {
        return callBack(
          list.filter((item) => {
            return item._id !== id;
          })
        );
      }
      return null;
    };
  };

  const deleteTodo = (id, index) => {
    if (todoList[index].isCompleted) {
      updateCount(false);
    }
    const deleteItem = deleteInstance(id);
    deleteItem(searchResult, setSearchResult);
    deleteItem(todoList, setTodoList);
    removeDbData(`${DEFAULT_PATH}/${id}`);
  };

  const onTodoSearch = (event) => {
    setTextAreaHidden(true);
    let searchText = event.target.value.replace(/ /g, "").toLowerCase();
    if (searchText.length) {
      setSearchResult(
        todoList.filter((item) => {
          return item.text.toLowerCase().indexOf(searchText) !== -1;
        })
      );
    } else {
      setSearchResult(null);
      setTextAreaHidden(false);
    }
  };

  const checkBoxHandler = (event, index, _id) => {
    let newTodoList = [...todoList];
    let isChecked = event.target.checked;
    newTodoList[index].isCompleted = isChecked;
    updateCount(isChecked);
    setTodoList(newTodoList);
    storeDbData(newTodoList[index],DEFAULT_PATH+_id+"/");
  };

  return (
    <Todo
      todoList={todoList}
      searchResult={searchResult}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      todoCount={todoCount}
      textAreaRef={textAreaRef}
      onTodoSearch={onTodoSearch}
      isTextAreaHidden={isTextAreaHidden}
      checkBoxHandler={checkBoxHandler}
    />
  );
};

export default TodoScreen;
