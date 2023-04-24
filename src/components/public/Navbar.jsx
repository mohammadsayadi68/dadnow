import React from "react";
// import logo from "../../public/image/podilaw-mag.svg";
import logo from "../../public/image/Podilaw-mag-dark.svg";
import searchIcon from "../../public/image/search-normal.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" className="" />
        {/* <img src={logoText} alt="" className="padilaw-text" /> */}
      </div>
      <div className="navbar-menubar">
        <ul className="d-flex nav">
          <li className="nav-item">
            <a href="" className="nav-item-link">
              صفحه اصلی
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-item-link">
              {" "}
              مقالات
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-item-link">
              {" "}
              گزارش ها
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-item-link">
              {" "}
              اخبار چندرسانه ای
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-item-link">
              تحریریه
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-left">
        <div className="center navbar-left-search">
          <img src={searchIcon} alt="" className="navbar-left-search-icon" />
        </div>
        <a href="" className="navbar-left-login-btn">
          ورود/عضویت
        </a>
      </div>
    </div>
  );
};

export default Navbar;
