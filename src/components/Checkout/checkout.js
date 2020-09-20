import React, { useState } from "react";
import "./checkout.css";
import Cart from "../Checkout/cart";
import { v1 as uuidv } from "uuid";
import Card from "../Checkout/cards";
const Checkout = (props) => {
  const [values, setValues] = useState([]);
  const [card, setCard] = useState({
    nameOnCard: "",
    cardNo: "",
    exp: "",
    year: "",
    cvv: ""
  });
  const [id, setId] = useState(uuidv());
  const things = [
    {
      id: Math.floor(Math.random() * 100) + 1,
      item: "Pants",
      image: "https://via.placeholder.com/60x60",
      price: 200,
      quantity: 4
    }
  ];

  const handleChange = (e) => {
    var value = e.target.value;
    setCard({ ...card, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      id: id,
      CardAdded: card
    };
    console.log(newCard);
    const updatelist = setValues({ ...values, newCard });
    console.log(updatelist);
    setValues(updatelist);
    setId(uuidv());
    setCard({
      ...card,
      nameOnCard: "",
      cardNo: "",
      exp: "",
      year: "",
      cvv: ""
    });
  };
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
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="nameOnCard"
                    placeholder="Name On card"
                    value={card.nameOnCard}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="cardNo"
                    placeholder="1111-2222-3333-4444"
                    value={card.cardNo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="exp"
                    placeholder="Month"
                    value={card.exp}
                    required
                    onChange={handleChange}
                  />
                  /
                  <input
                    type="number"
                    name="year"
                    placeholder="Year"
                    value={card.year}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="cvv"
                    value={card.cvv}
                    placeholder="143"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="addCardButton">
                  <button>
                    <i className="fa fa-plus"></i>Add
                  </button>
                </div>
              </form>
            </div>
            <div className="allCards">
              <div className="address-heading">
                <hr />
                <span id="heading">
                  <i className="fa fa-credit-card"></i>Select Card
                </span>
                <hr />
              </div>
              {values.length > 0 ? (
                values.map((v) => <Card key={v.id} card={v} />)
              ) : (
                <div className="address-list2">
                  <span>No Addresses Were Added</span>
                </div>
              )}
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
