import React from "react";
import "../../styles/orderrecent.css";
import { Icons } from "../../assets/icons/Icons";
import { RxCaretDown } from "react-icons/rx";
import { FaLongArrowAltUp } from "react-icons/fa";
import DropdownMenu from "../Dropdown";

const OrderBook = () => {
  return (
    <div className="order__book--tabview">
      <div className="order__book--topIcon">
        <div className="order__book--gridIcons">
          <div className="gridIcon">{Icons.orderbook_top_leftIcon}</div>
          <div className="gridIcon">{Icons.orderbook_top_centerIcon}</div>
          <div className="gridIcon">{Icons.orderbook_top_rightIcon}</div>
        </div>
        <div className="order__book--numberDropdown">
          <DropdownMenu
            trigger={
              <div className="select__number">
                10
                <RxCaretDown />
              </div>
            }
          >
            <ul>
              {Array.from({ length: 20 }, (_, index) => (
                <li key={index}>{index + 1}</li>
              ))}
            </ul>
          </DropdownMenu>
        </div>
      </div>
      <div className="order__book--tableHeader">
        <div className="order__book--heading">
          <h4>Price</h4>
          <p>(USDT)</p>
        </div>
        <div className="order__book--heading">
          <h4>Amount</h4>
          <p>(BTC)</p>
        </div>
        <div className="order__book--heading">
          <h4>Total</h4>
          <p></p>
        </div>
      </div>
      <div className="orders__lists">
        <div className="orders__lose--lists">
          <Orders isLow />
          <Orders isLow />
          <Orders isLow />
          <Orders isLow />
          <Orders isLow />
        </div>
        <div className="orders__lose--gain">
          <h3>36,641.20</h3>
          <FaLongArrowAltUp />
          <h3>36,641.20</h3>
        </div>
        <div className="orders__gain--lists">
          <Orders />
          <Orders />
          <Orders />
          <Orders />
          <Orders />
        </div>
      </div>
    </div>
  );
};

const Orders = ({ isLow }) => {
  return (
    <div className="order__List">
      <p className={`order__List--price ${isLow ? "low" : "high"}`}>36920.12</p>
      <p className="order__List--amount">0.758965</p>
      <p className="order__List--total">28,020.98</p>
    </div>
  );
};

export default OrderBook;
