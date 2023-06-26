import React, { useEffect, useState } from "react";
import "../styles/dropdown.css"; // Stylesheet for the dropdown menu

const DropdownMenu = ({ children, trigger, open }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open ?? false);
  }, [open]);

  return (
    <div
      onMouseLeave={() => setIsOpen(false)}
      className={`dropdown ${isOpen ? "opened" : ""}`}
    >
      <div
        className=""
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          cursor: "pointer",
        }}
      >
        {trigger}
      </div>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default DropdownMenu;
