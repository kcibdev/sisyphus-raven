import React, { useState } from "react";
import "../../styles/buysell.css";
import Button from "../Button";
import EURIcon from "../../assets/images/eur_currency.png";
import USDIcon from "../../assets/images/usd_currency.png";
import NGNIcon from "../../assets/images/naira_currency.png";
import GBPIcon from "../../assets/images/british_currency.png";
import DropdownMenu from "../Dropdown";
import { RxCaretDown } from "react-icons/rx";
import { BiCheck } from "react-icons/bi";
import Limit from "./Limit";
import Market from "./Market";
import Stop from "./Stop";

const BottomSheet = () => {
  const [selectedCur, setSelectedCur] = useState("NGN");
  const [selectedTab, setSelectedTab] = useState("limit");
  const selectCurrency = [
    {
      icon: GBPIcon,
      title: "British Pounds",
      short: "GBP",
    },
    {
      icon: EURIcon,
      title: "European Euros",
      short: "EUR",
    },
    {
      icon: NGNIcon,
      title: "Nigerian Naira",
      short: "NGN",
    },
    {
      icon: USDIcon,
      title: "US Dollars",
      short: "USD",
    },
  ];

  return (
    <div className="buy__sell--content">
      <div className="buysell__topTabs">
        <div className="top__tab">Buy</div>
        <div className="top__tab">Sell</div>
      </div>
      <div className="mini__tabs">
        <div
          className={`mini__tab ${
            selectedTab === "limit" ? "selectedTab" : ""
          }`}
          onClick={() => setSelectedTab("limit")}
        >
          Limit
        </div>
        <div
          className={`mini__tab ${
            selectedTab === "market" ? "selectedTab" : ""
          }`}
          onClick={() => setSelectedTab("market")}
        >
          Market
        </div>
        <div
          className={`mini__tab ${selectedTab === "stop" ? "selectedTab" : ""}`}
          onClick={() => setSelectedTab("stop")}
        >
          Stop-Limit
        </div>
      </div>
      <div className="bsht__inputs">
        {selectedTab === "limit" && <Limit />}
        {selectedTab === "market" && <Market />}
        {selectedTab === "stop" && <Stop />}
        <div className="buysell__total">
          <p>Total</p>
          <p>0.00</p>
        </div>
        <Button
          color={"linear-gradient(90deg, #483BEB 0%, #7847E1 48%, #DD568D 96%)"}
          content={"Buy BTC"}
        />

        <div className="line__divider"></div>
        <div className="buysell__bottom">
          <div className="buysell__vl">
            <div className="vls">
              <span className="vl__topinfo">Total account value</span>
              <p className="vl__value">0.00</p>
            </div>
            <div className="vls">
              <DropdownMenu
                trigger={
                  <div>
                    NGN <RxCaretDown />
                  </div>
                }
              >
                <ul className="cur__content">
                  {selectCurrency.map((cur, index) => (
                    <li
                      className={`select__cur ${
                        selectedCur === cur.short ? "selected" : ""
                      }`}
                      onClick={() => setSelectedCur(cur.short)}
                    >
                      <div className="cur__img">
                        <img src={cur.icon} alt={cur.short + " Currency"} />
                        {selectedCur === cur.short && (
                          <span className="cur__check">
                            <BiCheck />
                          </span>
                        )}
                      </div>
                      <div className="cur__info">
                        <p className="cur__title">{cur.title}</p>
                        <p className="cur__short">{cur.short}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </DropdownMenu>
            </div>
          </div>
          <div className="buysell__vl">
            <div className="vls">
              <span className="vl__topinfo">Open Orders</span>
              <p className="vl__value">0.00</p>
            </div>
            <div className="vls">
              <span className="vl__topinfo">Available</span>
              <p className="vl__value">0.00</p>
            </div>
          </div>
          <Button color={"var(--blue)"} content="Deposit" width={"6rem"} />
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
