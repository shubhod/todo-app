import React from "react";
import TodoItemHoc from "../todo-item-hoc/todo-item-hoc-component";
import "./todo-item.scss";
export const TodoItemStatus = ({todoCount}) => {
  return (
    <TodoItemHoc>
      <div className="completed-count">{todoCount}</div>
      <div className="complete-title">Completed</div>
    </TodoItemHoc>
  );
};
const TodoItem = ({values,deleteTodo,children}) => {
  return (
    <TodoItemHoc>
      {children}
      <div className="">{values}</div>
      <div onClick={deleteTodo} className="todo-btn">
        <i class="fas fa-trash-alt"></i>
      </div>
    </TodoItemHoc>
  );
};



export default TodoItem;
