import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <div>
      <button className="button-86" type={props.type} onClick={props.event}>
        {props.label}
      </button>
    </div>
  );
};

export default Button;
