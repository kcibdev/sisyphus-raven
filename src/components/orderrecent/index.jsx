import React, { useState } from "react";

import OrderBook from "./OrderBook";
import RecentTrade from "./RecentTrade";
import DropdownMenu from "../Dropdown";

const OrderRecent = () => {
  const [selectTab, setSelectTab] = useState(0);
  return (
    <div className="trading__pairs--content">
      <div className="trading__pairs--tabs">
        <div
          role="button"
          className={`trading__pairs--tab ${selectTab === 0 ? "active" : ""}`}
          onClick={() => setSelectTab(0)}
        >
          Order Book
        </div>
        <div
          role="button"
          className={`trading__pairs--tab ${selectTab === 1 ? "active" : ""}`}
          onClick={() => setSelectTab(1)}
        >
          Recent Trades
        </div>
      </div>
      <div className="trading__pairs--tabviews">
        {selectTab === 0 && <OrderBook />}
        {selectTab === 1 && <RecentTrade />}
      </div>
    </div>
  );
};

export default OrderRecent;
