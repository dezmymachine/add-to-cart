import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { StoreContext } from "../context-reducer/StoreContext";
import CartCard from "../components/CartCard";

const Basket = () => {
  const { products, total } = useContext(StoreContext);
  return (
    <div>
      <Navbar />
      <h3>Your Cart</h3>
      <p>Total: ${total}</p>
      <div className="grid grid-cols-2">
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Basket;
