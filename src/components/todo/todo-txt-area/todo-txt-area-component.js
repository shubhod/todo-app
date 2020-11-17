import React, { Children } from "react";
import "./todo-txt-area.scss";
const TodoTxtArea = ({children,...others}) => {
  return (
    <div {...others} className="todo-txt-area">
      {children}
    </div>
  );
};

export default TodoTxtArea;
