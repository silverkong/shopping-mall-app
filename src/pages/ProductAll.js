import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState("");
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    const getProducts = async () => {
      let searchQuery = query.get("q") || "";
      let url = `https://my-json-server.typicode.com/silverkong/shopping-mall-app/products/?q=${searchQuery}`;
      let response = await fetch(url);
      let data = await response.json();
      setProductList(data);
    };

    getProducts();
  }, [query]);

  return (
    <div className="list-all-products">
      <Container>
        <Row>
          {productList &&
            productList.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
