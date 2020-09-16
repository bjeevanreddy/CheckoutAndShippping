import React from "react";
// import Shipping from "./shipping";
// import EditingAddress from "./editingAddress";
const NewAddress = ({ addr, handleChange, handleSubmit, canedit }) => {
  // const {  } = props;

  // console.log(editingitem);

  return (
    <div className="contact-form">
      <div className="text">
        <h4>New Shipping Address</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="names">
          <div>
            <label>Customer Name:</label>
            <input
              type="text"
              name="firstname"
              value={addr.firstname}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label>Mobile:</label>
          <input
            type="tel"
            name="mobile"
            value={addr.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address 1:</label>
          <input
            type="text"
            name="address1"
            value={addr.address1}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address 2:</label>
          <input
            type="text"
            name="address2"
            value={addr.address2}
            onChange={handleChange}
            required
          />
        </div>
        <div className="place">
          <div>
            <label>State:</label>
            <input
              type="text"
              name="state"
              value={addr.state}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Zip:</label>
            <input
              type="text"
              name="zip"
              value={addr.zip}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="primary">
          <input type="checkbox" id="default" name="default" value="default" />
          <label for="default">Default</label>
        </div>
        <div className="submit-button">
          <button type="submit">
            {canedit ? "Update Address" : "Add Address"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewAddress;
