import React from "react";

function ProductCard({
  name,
  image,
  onClick,
  showButton = true,
  isCart = false,
}) {
  return (
    <div className="product-card">
      <p className="title">{name}</p>
      <img className="product-image" src={image}></img>
      {showButton && (
        <button className="product-select" onClick={onClick}>
          {isCart ? "I don't want this" : "I want this!"}
        </button>
      )}
    </div>
  );
}

export default ProductCard;
