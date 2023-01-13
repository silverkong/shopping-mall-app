import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetail = async () => {
      let url = `http://localhost:4000/products/${id}`;
      let response = await fetch(url);
      let data = await response.json();
      setProduct(data);
    };
    getProductDetail();
  }, [id]);

  return (
    <Container className="wrap-product-detail">
      <Row>
        <Col className="wrap-product-detail-img">
          <img src={product?.img} alt="" />
        </Col>
        <Col className="wrap-product-detail-info">
          <span className="txt-product-detail-brand">{product?.brand}</span>
          <h3 className="txt-product-detail-title">{product?.title}</h3>
          <div className="box-product-detail-badge">
            <span>{product?.new === true ? "NEW" : ""}</span>
            <span>{product?.choice === true ? "BEST" : ""}</span>
          </div>
          <span
            className={
              product?.discount === 0
                ? "dp-none"
                : "txt-product-detail-dc-percent"
            }
          >
            {product?.discount}%
          </span>
          <span className="txt-product-detail-price">
            {product?.price.toLocaleString()}원
          </span>
          <span
            className={
              product?.discount === 0 ? "dp-none" : "txt-product-detail-price"
            }
          >
            {product && product
              ? product.price -
                Math.floor(
                  product.price * (product.discount * 0.01)
                ).toLocaleString()
              : ""}
            원
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
