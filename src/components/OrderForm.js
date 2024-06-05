import React, { useState, useContext } from "react";
import OrderContext from "../context/OrderContext";

const OrderForm = ({ item, closeModal }) => {
  const { addToOrder } = useContext(OrderContext);
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addToOrder({ ...item, quantity, instructions });
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{item.name}</h2>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div>
        <label>Special Instructions:</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
      </div>
      <button type="submit">Add to Order</button>
    </form>
  );
};

export default OrderForm;
