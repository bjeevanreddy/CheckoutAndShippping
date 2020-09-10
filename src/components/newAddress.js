import React, { useState } from "react";
// import Shipping from "./shipping";
// import EditingAddress from "./editingAddress";
const NewAddress = (props) => {
  const { editingitem, canedit, submitValue } = props;

  console.log(editingitem);
  const [addr, setAddr] = useState({
    id: Math.floor(Math.random() * 100) + 1,
    name: "",
    phone: "",
    address2: "",
    zip: ""
  });

  return (
    <div className="contact-form">
      <div className="text">
        <h4>New Shipping Address</h4>
      </div>
      <div className="names">
        <div>
          <label>Customer Name:</label>
          <input
            type="text"
            name="firstname"
            value={addr.name}
            onChange={(e) => setAddr({ ...addr, name: e.target.value })}
            required
          />
        </div>
      </div>
      <div>
        <label>Mobile:</label>
        <input
          type="tel"
          name="mobile"
          value={addr.phone}
          onChange={(e) => setAddr({ ...addr, phone: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Address 1:</label>
        <input
          type="text"
          name="address1"
          value={addr.address1}
          onChange={(e) => setAddr({ ...addr, address1: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Address 2:</label>
        <input
          type="text"
          name="address2"
          value={addr.address2}
          onChange={(e) => setAddr({ ...addr, address2: e.target.value })}
          required
        />
      </div>
      <div className="place">
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={addr.State}
            onChange={(e) => setAddr({ ...addr, State: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Zip:</label>
          <input
            type="text"
            name="text"
            value={addr.zip}
            onChange={(e) => setAddr({ ...addr, zip: e.target.value })}
            required
          />
        </div>
      </div>
      <div className="primary">
        <input type="checkbox" id="default" name="default" value="default" />
        <label for="default">Default</label>
      </div>
      <div className="submit-button">
        <button type="submit" onClick={(e) => submitValue(addr)}>
          {canedit ? "Edit Address" : "Add Address"}
        </button>
      </div>
    </div>
  );
};

export default NewAddress;
