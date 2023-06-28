import React, { useState } from "react";
import "../styles/textinput.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import DropdownMenu from "./Dropdown";
import { RxCaretDown } from "react-icons/rx";

const InputDropdown = ({ leftTitle = "" }) => {
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
        {leftTitle} <AiOutlineInfoCircle />
      </p>
      <div className="inputDropdownBtn">
        <DropdownMenu
          open={openDropdown}
          trigger={
            <div>
              Good till cancelled <RxCaretDown />
            </div>
          }
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
    </div>
  );
};

export default InputDropdown;
