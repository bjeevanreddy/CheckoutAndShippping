import React from "react";
import CartItem from "../Checkout/cartitem";
const Cart = ({ things }) => {
  return (
    <div>
      <table>
        <tr>
          <td>Product</td>
          <td>Name</td>
          <td>Quantity</td>
          <td>Price</td>
          <td>Total</td>
        </tr>
        {things.map((t) => (
          <CartItem thing={t} />
        ))}
        <tr>
          <td colSpan="4">Total: </td>
          <td>$1600</td>
        </tr>
      </table>
    </div>
  );
};

export default Cart;
