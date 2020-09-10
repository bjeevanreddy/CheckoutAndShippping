import React from "react";

const Card = ({ card }) => {
  return (
    <div className="card-view">
      <div className="cardSelect">
        <input type="radio" name="card" />
      </div>
      <div className="cardDetails">
        <div>
          <p>Name: {card.name}</p>
        </div>
        <div>
          <p>
            Card Number:{" "}
            {card.cardNumber.substring(0, 2) +
              card.cardNumber.substring(2, 12).replace(/[0-9]/g, "*") +
              card.cardNumber.substring(12, card.cardNumber.length)}
          </p>
        </div>
        <div>
          <p>
            Exp: {card.month}/{card.year}
          </p>
        </div>
        <div>
          <p>
            CVV:
            {card.cvv.substring(0, 1) +
              card.cvv.substring(1, 3).replace(/[0-9]/g, "*")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
