import React,{forwardRef} from "react";
import "./input-field-styles.scss";
const InputField = ({className,label,...others},ref) => {
  let inputClassString = "input";
  let labelClassString = "input_label";
  if (className) inputClassString = `${inputClassString} ${className}`;
  return (
    <>
      <input
        className={inputClassString}
        ref={ref}
        {...others}
      ></input>
      {label && <label>{label}</label>}
    </>
  );
};

export default forwardRef(InputField);
