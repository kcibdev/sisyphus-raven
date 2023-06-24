import React from "react";
import { Icons } from "../../assets/icons/Icons";

const OrderBook = () => {
  return (
    <div className="order__book--tabview">
      <div className="order__book--topIcon">
        <div className="order__book--gridIcons">
          <div className="gridIcon">{Icons.orderbook_top_leftIcon}</div>
          <div className="gridIcon">{Icons.orderbook_top_centerIcon}</div>
          <div className="gridIcon">{Icons.orderbook_top_rightIcon}</div>
        </div>
        <div className="order__book--numberDropdown">10</div>
      </div>
    </div>
  );
};

export default OrderBook;
