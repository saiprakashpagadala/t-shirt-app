import React from "react";
import "./Cart.css";
import Counter from "./Counter";

const Cart = () => {
  const name = "Pink Polo";
  const price = 350;
  return (
    <div className="bg">
      <h1 style={{textAlign:"center"}}>Cart</h1>
      <div className="cart-items">
        <div className="image-name-price-container">
          <img
            src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-hoodie-men.png"
            alt="product"
            className="cart-image"
          />
          <div className="name-price-container">
            <h3>{name}</h3>
            <p>Rs {price}</p>
          </div>
        </div>
        <Counter />
        <p className="remove">Remove from Cart</p>
      </div>
    </div>
  );
};

export default Cart;
