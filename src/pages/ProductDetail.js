import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetail = async () => {
      let url = `https://my-json-server.typicode.com/silverkong/shopping-mall-app/products/${id}`;
      let response = await fetch(url);
      let data = await response.json();
      setProduct(data);
    };
    getProductDetail();
    window.scrollTo(0, 0);
  }, [id]);

  let now = new Date();
  let todayMonth = now.getMonth() + 1;
  let todayDate = now.getDate();

  return (
    <Container className="wrap-product-detail">
      <Row>
        {/* 상품 이미지 */}
        <Col className="wrap-product-detail-img">
          <img src={product?.img} alt="" />
        </Col>
        {/* 상품 정보 */}
        <Col className="wrap-product-detail-info">
          {/* 브랜드 / 상품명 */}
          <span className="txt-product-detail-brand">{product?.brand}</span>
          <h3 className="txt-product-detail-title">{product?.title}</h3>
          {/* 신상품 / 베스트 */}
          <div className="box-product-detail-badge">
            <span className={product?.new === true ? "" : "dp-none"}>
              {product?.new === true ? "신상품" : ""}
            </span>
            <span className={product?.choice === true ? "" : "dp-none"}>
              {product?.choice === true ? "베스트" : ""}
            </span>
          </div>
          {/* 할인율 / 정가 / 할인가 */}
          <div className="box-product-detail-price">
            <span
              className={
                product?.discount === 0
                  ? "dp-none"
                  : "txt-product-detail-dc-percent"
              }
            >
              {product?.discount}%
            </span>
            <span
              className={
                product?.discount === 0
                  ? "txt-product-detail-price"
                  : "txt-product-detail-price txt-product-detail-dc"
              }
            >
              {product?.price.toLocaleString()}원
            </span>
            <span
              className={
                product?.discount === 0 ? "dp-none" : "txt-product-detail-price"
              }
            >
              {product && product
                ? (
                    product.price -
                    Math.floor(product.price * (product.discount * 0.01))
                  ).toLocaleString()
                : ""}
              원
            </span>
          </div>
          {/* 배송 날짜 */}
          <div className="box-product-detail-delivery">
            <FontAwesomeIcon icon={faTruck} className="ic-truck" />
            <div className="box-product-detail-delivery-info">
              <span>무료배송</span>
              <span>
                {todayMonth}월 {todayDate + 2}일 도착예정
              </span>
            </div>
          </div>
          {/* 옵션 */}
          <div className="box-product-detail-option">
            <span>옵션선택</span>
            <Dropdown className="dropdown-product-detail-option">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                사이즈
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.map((option) => (
                  <Dropdown.Item href="#" key={option}>
                    {option}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {/* 장바구니 / 바로구매 버튼 */}
          <div className="box-product-detail-btn">
            <Button className="btn-product-detail-cart" type="button">
              장바구니
            </Button>
            <Button className="btn-product-detail-buy" type="button">
              바로구매
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
