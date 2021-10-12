import React, { useState } from "react";
import ReastaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(order => {
      return (order += 1);
    });
  };

  return (
    <li>
      {props.orderType}: {orders} <ReastaurantButton addOrder={orderOne} />
    </li>
  );
};

export default Order;
