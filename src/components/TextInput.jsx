import React from "react";
import "../styles/textinput.css";
import { AiOutlineInfoCircle } from "react-icons/ai";

const TextInput = ({ leftTitle = "", cur = "USD" }) => {
  return (
    <div className="textInput">
      <p className="leftTitle">
        {leftTitle} <AiOutlineInfoCircle />
      </p>
      <input type="number" placeholder="0.00" />
      <p className="rightCurrency">{cur}</p>
    </div>
  );
};

export default TextInput;
