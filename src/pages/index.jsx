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

const Index = () => {
  return (
    <>
      {/* NAV HEADER SECTION */}
      <Header />
      {/* MAIN CONTENT */}
      <main>
        {/* TOP INFO */}
        <div className="top__info">
          <div className="coins right__border">
            <div className="coins__dropdown">
              {Icons.coins__logo} <h2 className="coin__name">BTC/USDT</h2>{" "}
              <RxCaretDown />
            </div>
            <div className="coin__change">$20,634</div>
          </div>
          <div className="change">
            <div className="change__24h right__border">
              <div className="change__hr">
                <AiOutlineClockCircle /> <p>24h Change</p>
              </div>
              <div className="change__amount--percent high">
                <p className="change__amount">520.80</p>
                <p className="change__percent">+1.25%</p>
              </div>
            </div>
            <div className="change__24h right__border">
              <div className="change__hr">
                <FaLongArrowAltUp /> <p>24h High</p>
              </div>
              <div className="change__amount--percent">
                <p className="change__amount">520.80</p>
                <p className="change__percent">+1.25%</p>
              </div>
            </div>
            <div className="change__24h right__border">
              <div className="change__hr">
                <FaLongArrowAltDown /> <p>24h Low</p>
              </div>
              <div className="change__amount--percent">
                <p className="change__amount">520.80</p>
                <p className="change__percent">+1.25%</p>
              </div>
            </div>
            <div className="change__24h">
              <div className="change__hr">
                <FaRegChartBar /> <p>24h Volume</p>
              </div>
              <div className="change__amount--percent">
                <p className="change__amount">75.655.25</p>
                <p className="change__percent"></p>
              </div>
            </div>{" "}
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
              <div className="trading__pairs--content">
                <div className="trading__pairs--tabs">
                  <div className="trading__pairs--tab">Order Book</div>
                  <div className="trading__pairs--tab">Recent Trades</div>
                </div>
                <div className="trading__pairs--tabviews">
                  <div className="order__book--tabview">
                    <div className="order__book--topIcon">
                      <div className="order__book--gridIcons">
                        <div className="gridIcon">
                          {Icons.orderbook_top_leftIcon}
                        </div>
                        <div className="gridIcon">
                          {Icons.orderbook_top_centerIcon}
                        </div>
                        <div className="gridIcon">
                          {Icons.orderbook_top_rightIcon}
                        </div>
                      </div>
                      <div className="order__book--numberDropdown">10</div>
                    </div>
                  </div>
                  <div className="recent__trades--tabview"></div>
                </div>
              </div>
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
