import React from "react";
import Logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

const Nav = () => {
  const menuList = [
    "전체",
    "상의",
    "아우터",
    "바지/스커트",
    "원피스",
    "가방",
    "신발",
    "액세서리",
    "기획전",
  ];
  return (
    <div className="container-box">
      <Container>
        <div className="wrap-nav">
          <div className="wrap-logo-input">
            <img src={Logo} alt="" className="lg-mellow" />
            <div className="input-search">
              <input type="text" />
              <FontAwesomeIcon icon={faSearch} className="ic-search" />
            </div>
          </div>
          <div className="btn-login">
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </div>
        </div>
        <ul className="list-nav">
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Nav;
