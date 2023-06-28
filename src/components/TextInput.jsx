import React from "react";
import "../styles/textinput.css";
import { AiOutlineInfoCircle } from "react-icons/ai";

const TextInput = ({ placeholder, leftTitle, cur }) => {
  return (
    <div className="textInput">
      <p className="leftTitle">
        Limit Price <AiOutlineInfoCircle />
      </p>
      <input type="number" placeholder="0.00" />
      <p className="rightCurrency">USD</p>
    </div>
  );
};

export default TextInput;
