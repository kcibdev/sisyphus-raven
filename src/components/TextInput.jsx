import React from "react";
import "../styles/textinput.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const TextInput = ({ placeholder, leftTitle, cur }) => {
  return (
    <div className="textInput">
      <p className="leftTitle">
        Limit Price <AiOutlineQuestionCircle />
      </p>
      <input type="number" placeholder="0.00" />
      <p className="rightCurrency">USD</p>
    </div>
  );
};

export default TextInput;
