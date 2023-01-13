import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState("");
  const getProducts = async () => {
    let url = "http://localhost:4000/products";
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="list-all-products">
      <Container>
        <Row>
          {productList &&
            productList.map((menu) => (
              <Col lg={3}>
                <ProductCard key={menu.id} item={menu} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
