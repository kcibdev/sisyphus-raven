import React, { useState } from "react";
import "../styles/textinput.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import DropdownMenu from "./Dropdown";

const InputDropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const items = [
    "Fill or kill",
    "Good till cancelled",
    "Good till date",
    "Immediate or cancel",
  ];
  return (
    <div className="textInput dropdown">
      <p className="leftTitle">
        Limit Price <AiOutlineInfoCircle />
      </p>
      <div className="inputDropdownBtn">
        <DropdownMenu
          open={openDropdown}
          trigger={<div>Good till cancelled</div>}
        >
          <ul className="">
            {items.map((item, index) => (
              <li key={item + index} onClick={() => setOpenDropdown(false)}>
                {item}
              </li>
            ))}
          </ul>
        </DropdownMenu>
      </div>
      <p className="rightCurrency">USD</p>
    </div>
  );
};

export default InputDropdown;
