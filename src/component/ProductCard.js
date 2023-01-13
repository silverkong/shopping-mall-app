import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  // 할인가격 계산
  const dc = Math.floor(item.price * (item.discount * 0.01));
  const dcPrice = item.price - dc;

  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/products/${item.id}`);
  };
  return (
    <div className="wrap-product-card" onClick={showDetail}>
      <div className="wrap-product-img">
        <span className={item?.new === true ? "badge-common badge-new" : ""}>
          {item?.new === true ? "NEW" : ""}
        </span>
        <span
          className={
            item?.choice === true
              ? item.new
                ? "badge-common badge-pick badge-new-and-pick"
                : "badge-common badge-pick"
              : ""
          }
        >
          {item?.choice === true ? "BEST" : ""}
        </span>
        <img className="img-product" src={item?.img} alt="" />
      </div>
      <p className="txt-product-brand">{item?.brand}</p>
      <p className="txt-product-title">{item?.title}</p>
      <span
        className={item?.discount === 0 ? "dp-none" : "txt-product-dc-percent"}
      >
        {item?.discount === 0 ? "" : item.discount}%
      </span>
      <span
        className={
          item
            ? dc === 0
              ? "txt-product-price"
              : "txt-product-price txt-product-dc"
            : ""
        }
      >
        {item?.price.toLocaleString()}원
      </span>
      <span className={dc === 0 ? "dp-none" : "txt-product-price"}>
        {dcPrice.toLocaleString()}원
      </span>
    </div>
  );
};

export default ProductCard;
