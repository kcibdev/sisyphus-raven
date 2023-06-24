import React, { useState } from "react";
import "../styles/dropdown.css"; // Stylesheet for the dropdown menu

const DropdownMenu = ({ children, trigger }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`dropdown ${isOpen ? "opened" : ""}`}>
      <div className="" onClick={() => setIsOpen((prev) => !prev)}>
        {trigger}
      </div>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default DropdownMenu;
