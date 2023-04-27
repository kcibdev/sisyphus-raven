import React from "react";
import Logo from "../assets/icons/logo.svg";
import Avatar from "../assets/images/avatar.png";
import { Link } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { RxCaretRight, RxCaretDown } from "react-icons/rx";
import { TbWorld } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import CandlestickChart from "../components/chart/candlestick";
import {
  FaLongArrowAltUp,
  FaLongArrowAltDown,
  FaRegChartBar,
} from "react-icons/fa";
import { Icons } from "../assets/icons/Icons";

const Index = () => {
  return (
    <>
      {/* NAV HEADER SECTION */}
      <nav className="nav__header">
        {/* LEFT SIDE OF THE NAVBAR */}
        <div className="left__header">
          {/* WEBSITE LOGO */}
          <div className="logo">
            <div className="logo__container">
              <img src={Logo} alt="SisyPhus Logo" />
            </div>
          </div>
          {/* HEADER NAV LINKS */}
          <div className="nav__links--lists">
            <ul className="nav__links">
              <li className="nav__link active">
                <Link to={"/"}>Dashboard</Link>
              </li>
              <li className="nav__link">
                <Link to={"/"}>Markets</Link>
              </li>
              <li className="nav__link">
                <Link to={"/"}>Wallet</Link>
              </li>
              <li className="nav__link">
                <Link to={"/"}>Profile</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* RIGHT SIDE OF THE NAV HEADER */}
        <div className="right__header">
          {/* SEARCH INPUT */}
          <div className="search__bar">
            <div className="search__input">
              <input type="text" placeholder="Search" />
              <CgSearch />
            </div>
          </div>
          <div className="profile">
            {/* PROFILE AVATAR */}
            <img src={Avatar} alt="Profile Avatar" />
            {/* PROFILE NAME */}
            <p className="profile__name">Bright Isaac</p>
            <RxCaretRight />
          </div>
          <div className="action__icons">
            <div className="map__lang">
              <TbWorld />
            </div>
            <div className="logout">
              <BiLogOut />
            </div>
          </div>
        </div>
      </nav>
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
              <CandlestickChart />
            </div>
            {/* RECENT TRADES & ORDER BOOK */}
            <div className="trading__pairs"></div>
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
