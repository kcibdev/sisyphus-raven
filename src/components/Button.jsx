import React from "react";
import "../styles/btn.css";

const Button = ({ content, color, width }) => {
  return (
    <button
      className="Buttons"
      style={{
        background: color,
        width: width ?? "100%",
      }}
    >
      <div className="LeftSection">
        <div className="Button">{content}</div>
      </div>
    </button>
  );
};

export default Button;
