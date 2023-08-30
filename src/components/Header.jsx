import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faCartShoppin,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <h3
        onClick={() => {
          navigate("/");
        }}
      >
        TeeRex Store
      </h3>
      <div className="product-cart-container-header">
        <h3
          onClick={() => {
            navigate("/");
          }}
        >
          Products
        </h3>
        <div
          className="cart-icon"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <FontAwesomeIcon icon={faShoppingCart} className="icon-size" />
          {/* {itemCount > 0 && <span className="badge">{itemCount}</span>} */}
          <span className="badge">{5}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
