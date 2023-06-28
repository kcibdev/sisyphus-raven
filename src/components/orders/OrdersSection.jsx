import React from "react";

const OrdersSection = () => {
  return (
    <div className="orders__section">
      <div className="orders__content">
        <div className="orders__tabs">
          <div className="orders__tab">Open Orders</div>
          <div className="orders__tab">Positions</div>
          <div className="orders__tab">Order History</div>
          <div className="orders__tab">Trade History</div>
        </div>
      </div>
    </div>
  );
};

export default OrdersSection;
