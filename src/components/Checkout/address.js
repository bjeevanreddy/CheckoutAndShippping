import React from "react";

const Address = () => {
  return (
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
  );
};

export default Address;
