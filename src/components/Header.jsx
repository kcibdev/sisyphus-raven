import Logo from "../assets/icons/logo.svg";
import Avatar from "../assets/images/avatar.png";
import { Link } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { RxCaretRight } from "react-icons/rx";
import { TbWorld } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";

const Header = () => {
  return (
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
          <RxCaretRight className="profile__arrowRight" />
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
  );
};

export default Header;
