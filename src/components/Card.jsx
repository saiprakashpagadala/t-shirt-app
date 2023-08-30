import React from "react";
import "./Card.css";

const Card = ({ imageUrl, name, price }) => {
  return (
    <div className="card-container">
      <div>
        <h4 style={{marginBottom:"0.5rem"}}>{name}</h4>
        <img src={imageUrl} alt={name} className="image-container"/>
      </div>
      <div className="price-cart">
        <h4>RS {price}</h4>
        <button className="add-to-cart-button">Add To Cart</button>
      </div>
    </div>
  );
};

export default Card;
