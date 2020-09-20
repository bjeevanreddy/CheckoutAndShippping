import React from "react";
import CartItem from "../Checkout/cartitem";
const Cart = ({ things }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Product</td>
            <td>Name</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Total</td>
          </tr>
          {things.map((t) => (
            <CartItem key={t.id} thing={t} />
          ))}
          <tr>
            <td colSpan="4">Total: </td>
            <td>$1600</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
