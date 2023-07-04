import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
// import logo from "../../public/image/podilaw-mag.svg";
import logo from "../../public/image/Podilaw-mag-dark.svg";
import searchIcon from "../../public/image/search-normal.svg";
import userIcon from "../../public/image/user.jpeg";
import edit from "../../public/image/user-edit.svg";
import logout from "../../public/image/logout.svg";

const Navbar = () => {
  document.body.addEventListener('click', console.log('dropdown') );
  const user = null;
  const [dropdown, setDropdown] = useState(false);
  const toggleOpen = () => setDropdown(!dropdown);
  
  
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" className="" />
        {/* <img src={logoText} alt="" className="padilaw-text" /> */}
      </div>
      <div className="navbar-menubar">
        <ul className="d-flex nav">
          <li className="nav-item">
            <NavLink className="nav-item-link" activeClassName='active' to="/">
            {/* <i className="demo-icon icon-home" /> */}
              صفحه اصلی
            </NavLink>
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
            <NavLink
              className="nav-item-link"
              activeClassName="active"
              to="/multy-media"
            >
              اخبار چندرسانه ای
            </NavLink>
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
        {!user ? (
          <a href="" className="navbar-left-login-btn">
            ورود/عضویت
          </a>
        ) : (
          <>
            <div className="dropdown pointer">
              <div className="d-flex align-items-center" onClick={toggleOpen}>
                <i
                  className={`demo-icon   gradient-text t-2 ${
                    dropdown ? "icon-angle-up" : "icon-angle-down"
                  }`}
                />
                 <span className="  gray-title f-12 mx-2">لیدا بابایی</span>
                <img src={userIcon} alt="" className="nav-avatar" />
              </div>
              <div
                className={`dropdown-menu ${dropdown ? "show" : ""}`}
                aria-labelledby="dropdownMenuButton"
              >
                <NavLink className="dropdown-item" to='/'>
                  <img src={edit} alt="" />
                  
                 <span className="mx-2"> مشاهده پروفایل</span>

                </NavLink>
                <NavLink className="nav-item-link" activeClassName="active" to="/">
              {/* <i className="demo-icon icon-home" /> */}
              صفحه اصلی
            </NavLink>
                <a className="dropdown-item mt-3" href="#">
                <img src={logout} alt="" />

                 <span className="mx-2"> خروج</span>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
