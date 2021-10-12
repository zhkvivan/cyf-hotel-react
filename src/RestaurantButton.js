import React from "react";

const ReastaurantButton = props => {
  return (
    <button className="btn btn-primary" onClick={props.addOrder}>
      Add
    </button>
  );
};

export default ReastaurantButton;
