import React, { useState } from "react";
import "../styles/check.css"; // Stylesheet for the check button
import { AiOutlineCheck, AiOutlineInfoCircle } from "react-icons/ai";

const CheckButton = ({ title }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`check__button ${isChecked ? "checked" : ""}`}
      onClick={handleClick}
    >
      <span className="check__icon">{isChecked && <AiOutlineCheck />}</span>
      <span className="title">{title}</span>

      <AiOutlineInfoCircle />
    </div>
  );
};

export default CheckButton;
