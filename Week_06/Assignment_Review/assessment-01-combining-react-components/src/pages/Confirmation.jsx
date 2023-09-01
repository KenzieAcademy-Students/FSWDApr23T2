import React from "react";
import ProductCard from "../components/ProductCard";

function Confirmation({ user, cart }) {
  return (
    <div>
      <h1>Thank you for your order, {user.name}</h1>
      <p>Your receipt will be emailed to you at {user.email}</p>
      <h3>Your Items</h3>
      <div className="products">
        {cart.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            showButton={false}
          />
        ))}
      </div>
    </div>
  );
}

export default Confirmation;
