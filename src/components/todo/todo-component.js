import React, { useState } from "react";
import "./todo-component.scss";
import TodoHeader from "./todo-header/todo-header-component";
import SearchBar from "../search-bar/search-bar-component";
import TodoTxtArea from "./todo-txt-area/todo-txt-area-component";
import TodoItem, { TodoItemStatus } from "./todo-item/todo-item-component";
import InputField from "../input-field/input-field-component";
import List from "../list/list-component";
import { enterPressed } from "../../helper/methods";

const Todo = ({
  todoList,
  onTodoSearch,
  todoCount,
  addTodo,
  deleteTodo,
  textAreaRef,
  searchResult,
  isTextAreaHidden,
  checkBoxHandler
}) => {
  return (
    <div class="todo">

      <TodoHeader>
        <SearchBar onChange={onTodoSearch}>
          <i class="fas fa-search"></i>
        </SearchBar>
      </TodoHeader>

      <TodoItemStatus {...{todoCount}} />

      <TodoTxtArea hidden={isTextAreaHidden}>
        <SearchBar
          ref={textAreaRef}
          textAreaClassName="todo-txt-area__inputField"
          onClick={addTodo}
          onKeyPress={(event)=>{event.persist();enterPressed(event,addTodo)}}
        >
          <i class="fas fa-plus"></i>
        </SearchBar>
      </TodoTxtArea>

      <List list={searchResult ? searchResult : todoList}>
        {(value,index) => (
          <TodoItem
            deleteTodo={() => {
              deleteTodo(value._id,index);
            }}
            key={value._id}
            values={value.text}
          >
            <InputField onChange={(event)=>{checkBoxHandler(event,index,value._id)}} type="checkBox" defaultChecked={value.isCompleted} />
          </TodoItem>
        )}
      </List>
    </div>
  );
};

export default Todo;
