import React from "react";
import './button-styles.scss'
const Button = ({className, children, onClick }) => {
    let classString="basic-btn";
    if(className) classString=`${classString} ${className}`
    return (

    <button className={classString} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
