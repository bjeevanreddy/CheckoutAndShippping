import React, { useState } from "react";
import "./shipping.css";
import { v1 as uuidv } from "uuid";
import NewAddress from "./newAddress";
import SelectAddress from "./selectAddress";

const Shipping = (props) => {
  const [values, setValues] = useState([]);
  const [addr, setAddr] = useState({
    firstname: "",
    mobile: "",
    address1: "",
    address2: "",
    state: "",
    zip: ""
  });
  const [id, setId] = useState(uuidv());
  const [canedit, setcanedit] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setAddr({ ...addr, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newaddr = {
      id: id,
      newAddress: addr
    };
    const updatelist = [...values, newaddr];

    setValues(updatelist);
    setId(uuidv());
    setAddr({
      ...addr,
      firstname: "",
      mobile: "",
      address1: "",
      address2: "",
      state: "",
      zip: ""
    });
    setcanedit(false);
  };
  const handleEdit = (id) => {
    console.log(id);
    const updatedItems = values.filter((item) => item.id !== id);
    const editingItem = values.find((item) => item.id === id).newAddress;

    setValues(updatedItems);
    setId(id);
    setAddr({
      ...addr,
      firstname: editingItem.firstname,
      mobile: editingItem.mobile,
      address1: editingItem.address1,
      address2: editingItem.address2,
      state: editingItem.state,
      zip: editingItem.zip
    });
    setcanedit(true);
  };

  const handleRemove = (id) => {
    const filteredAddr = values.filter((item) => item.id !== id);
    setValues(filteredAddr);
  };
  // function remove(id) {
  //   // const removed;
  //   var array1 = [...values];
  //   for (var i = 0; i < values.length; i++) {
  //     if (values[i].id === id) {
  //       array1.splice(i, 1);
  //       setValues(array1);
  //       break;
  //     }
  //   }
  // }

  return (
    <div className="shipping">
      <hr />
      <div className="heading">Shipping Details</div>
      <hr />
      <div className="main-info">
        <NewAddress
          handleSubmit={handleSubmit}
          addr={addr}
          handleChange={handleChange}
          canedit={canedit}
        />
        <div className="secondpart">
          <div className={values.length > 0 ? "address-list" : "address-list1"}>
            <h2>Select Address for delivery</h2>
            {values.length > 0 ? (
              values.map((v) => (
                <SelectAddress
                  key={v.id}
                  address={v}
                  handleEdit={handleEdit}
                  handleRemove={handleRemove}
                />
              ))
            ) : (
              <div className="address-list2">
                <span>No Addresses Were Added</span>
              </div>
            )}
          </div>
          <div className="endbuttons">
            <div className="checkout">
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
