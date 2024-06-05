import React, { createContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  const placeOrder = () => {
    setOrder([]);
    alert("Order placed!");
  };

  const addToOrder = (item) => {
    setOrder((prevOrder) => [...prevOrder, item]);
  };

  const updateOrder = (index, updatedItem) => {
    setOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      newOrder[index] = updatedItem;
      return newOrder;
    });
  };

  const removeFromOrder = (index) => {
    setOrder((prevOrder) => prevOrder.filter((_, i) => i !== index));
  };

  return (
    <OrderContext.Provider
      value={{ order, placeOrder, addToOrder, updateOrder, removeFromOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
