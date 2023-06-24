import React from "react";

const Change = ({
  title,
  icon,
  amount,
  percent,
  isRightBorder = true,
  isHigh = false,
}) => {
  return (
    <div className={`change__24h ${isRightBorder ? "right__border" : ""}`}>
      <div className="change__hr">
        {icon} <p>24h {title}</p>
      </div>
      <div className={`change__amount--percent ${isHigh ? "high" : ""}`}>
        <p className="change__amount">{amount}</p>
        <p className="change__percent">{percent}</p>
      </div>
    </div>
  );
};

export default Change;
