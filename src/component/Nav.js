import React from "react";
import Logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const menuList = [
    "여성",
    "남성",
    "잡화/슈즈",
    "명품",
    "골프/스포츠",
    "뷰티",
    "리빙",
    "아울렛",
    "기획전",
  ];
  return (
    <div className="wrap-nav">
      <div>
        <div className="btn-login">
          <FontAwesomeIcon icon={faUser} />
          <span>로그인</span>
        </div>
      </div>
      <div className="wrap-logo-input">
        <img src={Logo} alt="" className="lg-mellow" />
        <div className="input-search">
          <input type="text" />
          <FontAwesomeIcon icon={faSearch} className="ic-search" />
        </div>
      </div>
      <ul className="list-nav">
        {menuList.map((menu) => (
          <li>{menu}</li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
