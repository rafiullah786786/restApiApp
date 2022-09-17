import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <>
      <a href="#" class="animated-button1">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {props.value}
      </a>
    </>
  );
}

export default Button;
