import React from "react";
import "../styles/select.css";
import { Icons } from "../assets/icons/Icons";

const SelectMarket = () => {
  return (
    <div className="select__market">
      <h3 className="select__header">Select Market</h3>
      <div className="select__search">
        <div className="select__search--input">
          <input type="text" placeholder="Search" />
          {Icons.search_icon}
        </div>
      </div>
      <div className="select__tabs">
        <div className="select__tab">All</div>
        <div className="select__tab">USD</div>
        <div className="select__tab">BTC</div>
      </div>
      <div className="select__lists">
        <ul className="">
          <SelectList />
          <SelectList />
          <SelectList />
          <SelectList />
        </ul>
      </div>
    </div>
  );
};

const SelectList = () => {
  return (
    <li className="select__lists--details">
      <div className="select__list--icon">{Icons.coins__logo}</div>
      <div className="select__list--name">BTC - USDT</div>
      <div className="select__list--amount">$23,234.56</div>
      <div className="select__list--percent">+0.0005%</div>
    </li>
  );
};

export default SelectMarket;
