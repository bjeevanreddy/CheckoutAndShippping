import React from "react";
const CartItem = ({ thing }) => {
  return (
    <tr>
      <td>
        <img src={thing.image} alt="dfbd" />
      </td>
      <td>{thing.item}</td>
      <td>{thing.quantity}</td>
      <td>${thing.price}</td>
      <td>${thing.price * thing.quantity}</td>
    </tr>
  );
};

export default CartItem;
