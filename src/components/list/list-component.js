import React from "react";
const List = ({ list, children }) => {
  return (
    <>
      { list.map((value, index) => {
        return children(value, index);
      })}
    </>
  );
};

export default List;
