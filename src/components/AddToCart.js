import Cart from "../images/shopping-cart-outline-svgrepo-com.svg";
import "./AddToCart.css";
import React, { useContext, useState } from "react";
import OrderContext from "../context/OrderContext";
import OrderSummary from "./OrderSummary";

const AddToCart = () => {
  const { order } = useContext(OrderContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="cart">
        <div className="cart-icon" onClick={() => setIsOpen(!isOpen)}>
          <img width={30} src={Cart} />
          {(order && order.length) > 0 && <span>{order.length}</span>}
        </div>
        {isOpen && (
          <div className="cart-summary">
            <OrderSummary />
          </div>
        )}
      </div>
    </>
  );
};

export default AddToCart;
