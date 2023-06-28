import React, { useState } from "react";
import "../../styles/orders.css";

const OrdersSection = () => {
  const [openTabs, setOpenTabs] = useState("open");
  return (
    <div className="orders__section">
      <div className="orders__content">
        <div className="orders__tabs">
          <div
            className={`orders__tab ${openTabs === "open" ? "selected" : ""}`}
            onClick={() => setOpenTabs("open")}
          >
            Open Orders
          </div>
          <div
            className={`orders__tab ${
              openTabs === "position" ? "selected" : ""
            }`}
            onClick={() => setOpenTabs("position")}
          >
            Positions
          </div>
          <div
            className={`orders__tab ${openTabs === "order" ? "selected" : ""}`}
            onClick={() => setOpenTabs("order")}
          >
            Order History
          </div>
          <div
            className={`orders__tab ${openTabs === "trade" ? "selected" : ""}`}
            onClick={() => setOpenTabs("trade")}
          >
            Trade History
          </div>
        </div>
        <div className="orders__tabviews">
          {openTabs === "open" && (
            <div className="orders__tabview">
              <h3>No Open Orders</h3>
              <p>
                Sint quis dolore sint amet adipisicing aliquip sunt laborum
                deserunt magna mollit. In sunt elit est dolor commodo voluptate
                occaecat. Ipsum amet enim occaecat mollit nostrud culpa proident
                nisi incididunt tempor
              </p>
            </div>
          )}
          {openTabs === "position" && (
            <div className="orders__tabview">
              <h3>No Positions</h3>
              <p>
                Sint quis dolore sint amet adipisicing aliquip sunt laborum
                deserunt magna mollit. In sunt elit est dolor commodo voluptate
                occaecat. Ipsum amet enim occaecat mollit nostrud culpa proident
                nisi incididunt tempor
              </p>
            </div>
          )}
          {openTabs === "order" && (
            <div className="orders__tabview">
              <h3>No Order History</h3>
              <p>
                Sint quis dolore sint amet adipisicing aliquip sunt laborum
                deserunt magna mollit. In sunt elit est dolor commodo voluptate
                occaecat. Ipsum amet enim occaecat mollit nostrud culpa proident
                nisi incididunt tempor
              </p>
            </div>
          )}
          {openTabs === "trade" && (
            <div className="orders__tabview">
              <h3>No Trade History</h3>
              <p>
                Sint quis dolore sint amet adipisicing aliquip sunt laborum
                deserunt magna mollit. In sunt elit est dolor commodo voluptate
                occaecat. Ipsum amet enim occaecat mollit nostrud culpa proident
                nisi incididunt tempor
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersSection;
