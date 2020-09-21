import React from "react";

const NewCard = ({ card, handleChange, handleSubmit }) => {
  return (
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
  );
};

export default NewCard;
