import React, { useContext } from "react";
import OrderContext from "../context/OrderContext";

const OrderSummary = () => {
  const { order, removeFromOrder, placeOrder } = useContext(OrderContext);

  return (
    <>
      {(! order || order.length == 0) && (<p>Add some items to cart</p>)}
      {order && order.length > 0 && (
        <div>
          <h2>Your Order</h2>
          <ul>
            {order.map((item, index) => (
              <li key={index}>
                {item.name} - {item.quantity} x {item.price} <br />
                Instructions: {item.instructions}
                <button onClick={() => removeFromOrder(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={placeOrder}>Place Order</button>
        </div>
      )}
    </>
  );
};

export default OrderSummary;
