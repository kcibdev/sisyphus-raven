import React from "react";
import { RxCaretDown } from "react-icons/rx";
import { AiOutlineClockCircle } from "react-icons/ai";
// import CandlestickChart from "../components/chart/candlestick";
import {
  FaLongArrowAltUp,
  FaLongArrowAltDown,
  FaRegChartBar,
} from "react-icons/fa";
import { Icons } from "../assets/icons/Icons";
import Header from "../components/Header";
import Change from "../components/Change";
import OrderRecent from "../components/orderrecent";
import DropdownMenu from "../components/Dropdown";
import SelectMarket from "../components/SelectMarket";

const Index = () => {
  return (
    <>
      {/* NAV HEADER SECTION */}
      <Header />
      {/* MAIN CONTENT */}
      <main>
        {/* TOP INFO */}
        <div className="top__info">
          <DropdownMenu
            trigger={
              <div className="coins right__border">
                <div className="coins__dropdown">
                  {Icons.coins__logo} <h2 className="coin__name">BTC/USDT</h2>{" "}
                  <RxCaretDown />
                </div>
                <div className="coin__change">$20,634</div>
              </div>
            }
          >
            <SelectMarket />
          </DropdownMenu>

          <div className="change">
            <Change
              amount={520.8}
              percent={"+1.25%"}
              isHigh
              title={"Change"}
              icon={<AiOutlineClockCircle />}
            />
            <Change
              amount={520.8}
              percent={"+1.25%"}
              title={"High"}
              icon={<FaLongArrowAltUp />}
            />
            <Change
              amount={520.8}
              percent={"+1.25%"}
              title={"Low"}
              icon={<FaLongArrowAltDown />}
            />
            <Change
              amount={77655.25}
              percent={""}
              title={"Volume"}
              icon={<FaRegChartBar />}
            />
          </div>
        </div>

        {/* CHARTS & ORDERS */}
        <div className="chart__orders">
          <div className="main__top--region">
            {/* CANDLESTICK CHART */}
            <div className="candlestick__chart">
              <div className="top__time"></div>
              {/* <CandlestickChart /> */}
            </div>
            {/* RECENT TRADES & ORDER BOOK */}
            <div className="trading__pairs">
              <OrderRecent />
            </div>
          </div>
          {/* ORDERS TABS */}
          <div className="orders"></div>
        </div>
        <div className="buy__sell"></div>
      </main>
    </>
  );
};

export default Index;
