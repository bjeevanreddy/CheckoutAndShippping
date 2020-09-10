import React from "react";
import "./checkout.css";
import Cart from "../Checkout/cart";
import Card from "../Checkout/cards";
const Checkout = () => {
  const things = [
    {
      id: Math.floor(Math.random() * 100) + 1,
      item: "Pants",
      image: "https://via.placeholder.com/60x60",
      price: 200,
      quantity: 4
    },
    {
      id: Math.floor(Math.random() * 100) + 1,
      item: "Shirts",
      image: "https://via.placeholder.com/60x60",
      price: 400,
      quantity: 2
    },
    {
      id: Math.floor(Math.random() * 100) + 1,
      item: "Pants",
      image: "https://via.placeholder.com/60x60",
      price: 200,
      quantity: 4
    },
    {
      id: Math.floor(Math.random() * 100) + 1,
      item: "Shirts",
      image: "https://via.placeholder.com/60x60",
      price: 400,
      quantity: 2
    }
  ];
  const cards = [
    {
      name: "jeevan",
      cardNumber: "1234567812345678",
      month: "12",
      year: "2020",
      cvv: "401"
    },
    {
      name: "Kavya",
      cardNumber: "1234567812345678",
      month: "07",
      year: "2024",
      cvv: "123"
    },
    {
      name: "XXXX",
      cardNumber: "1234567812345678",
      month: "07",
      year: "2024",
      cvv: "123"
    }
  ];
  return (
    <div className="checkout">
      <div className="mainheading">
        <h2>Checkout</h2>
      </div>
      <div className="first-block">
        <div className="address-card">
          <div className="address-heading">
            <hr />
            <span id="heading">
              <i className="fa fa-truck"></i>Shipping Address
            </span>
            <hr />
          </div>
          <div>
            <div>
              <p className="username">Jeevan Reddy</p>
            </div>
            <div>
              <p>77A,usa,california</p>
            </div>
            <div>
              <p>New Lane,beklers street</p>
            </div>
            <div>
              <p>8179523137</p>
            </div>
            <div>
              <p>
                <span id="email">
                  <b>bjeevanreddy45@gmail.com</b>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="cart">
          <div className="address-heading">
            <hr />
            <span id="heading">
              <i className="fa fa-shopping-cart"></i>Items Selected
            </span>
            <hr />
          </div>
          <Cart things={things} />
        </div>
        <div className="payments">
          <div className="address-heading">
            <hr />
            <span id="heading">
              <i className="fa fa-money"></i>Payments
            </span>
            <hr />
          </div>
          <div className="cards">
            <div className="cards-info">
              <div>
                <hr />
                Add New Card
                <hr />
              </div>
              <div>
                <input
                  type="text"
                  name="nameOnCard"
                  placeholder="Name On card"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="cardNo"
                  placeholder="1111-2222-3333-4444"
                  required
                />
              </div>
              <div>
                <input type="number" name="exp" placeholder="Month" required />/
                <input type="number" name="year" placeholder="Year" required />
              </div>
              <div>
                <input type="number" name="cvv" placeholder="143" required />
              </div>
              <div className="addCardButton">
                <button>
                  <i className="fa fa-plus"></i>Add
                </button>
              </div>
            </div>
            <div className="allCards">
              <div className="address-heading">
                <hr />
                <span id="heading">
                  <i className="fa fa-credit-card"></i>Select Card
                </span>
                <hr />
              </div>
              {cards.map((card, index = 0) => (
                <Card key={index} card={card} />
              ))}
            </div>
            <div className="block">
              <button>
                <i className="fa fa-check"></i>Make Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
