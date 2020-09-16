import React from "react";

const SelectAddress = (props) => {
  const { address, handleEdit, handleRemove } = props;
  return (
    <div className="address-card">
      <div className="radio-class">
        <input type="radio" name="select-address" />
      </div>
      <div className="address-info">
        <div>
          <p>
            {address.newAddress.firstname},{address.newAddress.mobile},
          </p>
          <p>
            {address.newAddress.address1},{address.newAddress.address2}
          </p>
          <p>
            {address.newAddress.State},{address.newAddress.zip}
          </p>
        </div>
        <div className="edit-row">
          <span onClick={() => handleEdit(address.id)}>Edit</span>

          <span onClick={() => handleRemove(address.id)}>Remove</span>
        </div>
      </div>
    </div>
  );
};

export default SelectAddress;
