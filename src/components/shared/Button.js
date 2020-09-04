import React from "react";

function Button({ className, text, onClick, type }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
