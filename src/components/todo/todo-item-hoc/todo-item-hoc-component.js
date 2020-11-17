import React from "react";
import "./todo-item-hoc-styles.scss";
const TodoItemHoc = ({ children }) => {
  return (
    <div className="TodoItemWrapper">
      <div className="TodoItemWrapper__left">{children[0]}</div>
      <div className="TodoItemWrapper__middle">{children[1]}</div>
      {children[2] ? (
        <div className="TodoItemWrapper__right">{children[2]}</div>
      ) : null}
    </div>
  );
};
// const TodoItemHoc = ({children }) => {
//     console.log(children);

//   return (
//     <div className="TodoItemWrapper">
//         {children}
//     </div>
//   );
// };

export default TodoItemHoc;
