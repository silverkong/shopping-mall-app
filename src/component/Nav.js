import React from "react";
import Logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서 URL을 바꿔줌
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div className="container-box">
      <Container>
        <div className="wrap-nav">
          <div className="wrap-logo-input">
            <img src={Logo} alt="" className="lg-mellow" />
            <div className="input-search">
              <input type="text" onKeyDown={(event) => search(event)} />
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
          <div className="btn-login" onClick={goToLogin}>
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
