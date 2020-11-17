import React, { forwardRef } from "react";
import Button from "../button/button-component";
import InputField from "../input-field/input-field-component";
import "./search-bar-styles.scss";
const SearchBar = (
  {
    searchBarClassName,
    btnClassName,
    textAreaClassName,
    onClick,
    children,
    onChange,
    onKeyPress,
  },
  ref
) => {
  let searchBarClassString = "search-bar";
  let textAreaClassString = "search-bar__input-field";
  if (searchBarClassName)
    searchBarClassString = `${searchBarClassString} ${searchBarClassName}`;
  if (textAreaClassName)
    textAreaClassString = `${textAreaClassString} ${textAreaClassName}`;
  return (
    <div className={searchBarClassString}>
      <InputField
        type="text"
        className={textAreaClassString}
        onChange={onChange}
        ref={ref}
        onKeyPress={onKeyPress}
      />
      <Button
        className={btnClassName ? btnClassName : "search-btn"}
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
};

export default forwardRef(SearchBar);
